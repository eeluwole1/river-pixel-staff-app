import type { Employee } from "../types/Employee";

export async function validateEmployee(employee: Employee) {
  const validationErrors = new Map<string, string>();

  if (!employee.name?.trim()) validationErrors.set("name", "Name must be defined");
  if (!employee.department?.trim()) validationErrors.set("department", "Department must be selected");

  if (employee.roleId !== undefined && employee.roleId !== null) {
    const roleId = String(employee.roleId).trim();
    if (roleId.length === 0) validationErrors.set("roleId", "Role must be valid");
  }

  return validationErrors;
}
