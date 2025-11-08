import { useEffect, useState } from "react";
import * as OrgRepo from "../../apis/organizationRepo";

interface LeadershipRole {
  role: string;
  description: (string | null)[];
  holders: string[];
}

export function Organization() {
  const [leadershipRoles, setLeadershipRoles] = useState<LeadershipRole[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(null);

        const [roles, employees] = await Promise.all([
          OrgRepo.getRoles(),
          OrgRepo.getEmployees(),
        ]);

        const byRoleId = new Map<string, string[]>();
        for (const e of employees) {
          const key = e.roleId ?? "__no_role__";
          if (!byRoleId.has(key)) byRoleId.set(key, []);
          byRoleId.get(key)!.push(e.name);
        }
        setLeadershipRoles(
          roles.map((r) => ({
            role: r.name,
            description: r.description
              ? r.description
                  .split("\n")
                  .map(s => s.trim())
                  .filter(Boolean)
              : [],                         // keep as array
            holders: byRoleId.get(r.id) ?? [],
          }))
        );
      } catch (err) {
        setError(String(err));
      } finally {
        setLoading(false);
      }
    })();
  }, []);


  if (loading) return <main><p>Loading organization…</p></main>;
  if (error) return <main><p className="error">{error}</p></main>;

  return (
    <main>
      <h2>Management Leadership Roles</h2>

      <div id="organization-list">
        {leadershipRoles.map((orgDesc, orgIndex) => (
          <div key={orgIndex}>
            <h3>{orgDesc.role}</h3>
            <ul>
              <li className="leadership">
                {orgDesc.description.map((leadershipDesc, leadershipIndex) => (
                  <div key={leadershipIndex}>{leadershipDesc ?? "Vacant"}</div>
                ))}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}


