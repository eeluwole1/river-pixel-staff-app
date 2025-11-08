export interface Employee {
  id: string; 
  name: string;
  email?: string;
  department: string;
  roleId?: string | null;
  createdAt?: string;
  updatedAt?: string;
}
