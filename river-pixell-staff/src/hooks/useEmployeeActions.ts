
import { useApiClient } from "./useApiClient";
import type { Employee } from "../types/Employee";
import type { BaseResponse } from "../types/BaseResponse";

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/v1`;

export function useEmployeeActions() {
  const { authFetch } = useApiClient();

  async function createEmployee(employee: Employee): Promise<Employee> {
    const res = await authFetch(`${BASE_URL}/employees/create`, {
      method: "POST",
      body: JSON.stringify(employee),
    });

    if (!res.ok) throw new Error("Failed to create employee");

    const json: BaseResponse<Employee> = await res.json();
    return json.data!;
  }

  async function deleteEmployee(employeeId: string): Promise<void> {
    const res = await authFetch(`${BASE_URL}/employees/delete/${employeeId}`, {
      method: "DELETE",
    });

    if (!res.ok) throw new Error("Failed to delete employee");
  }

  return { createEmployee, deleteEmployee };
}
