import { useAuth } from "@clerk/clerk-react";

export function useApiClient() {
  const { getToken } = useAuth();

  async function authFetch(url: string, options: RequestInit = {}) {
    const token = await getToken();

    return fetch(url, {
      ...options,
      headers: {
        ...(options.headers || {}),
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  }

  return { authFetch };
}
