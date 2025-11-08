export interface EmployeeDepartment {
    name?: string
    department: string;
    employees: string[];
}

export interface RoleEntry {
  role: string;
  description: (string | null)[];
}

export type Role = {
  id: string;
  name: string;
  description?: string | null;
  createdAt?: string;
  updatedAt?: string;
};