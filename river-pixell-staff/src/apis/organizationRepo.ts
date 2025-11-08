import type { BaseResponse } from "../types/BaseResponse";
import type { Role } from "../types/Roles";
import type { Employee } from "../types/Employee";

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/v1`;

export async function getRoles(): Promise<Role[]> {
  const res = await fetch(`${BASE_URL}/roles`);
  if (!res.ok) throw new Error("Failed to fetch roles");

  const json: BaseResponse<Role[]> = await res.json();
  if (json.status !== "success" || !json.data) {
    throw new Error(json.message ?? "Failed to fetch roles");
  }
  return json.data;
}

export async function getEmployees(): Promise<Employee[]> {
  const res = await fetch(`${BASE_URL}/employees`);
  if (!res.ok) throw new Error("Failed to fetch employees");

  const json: BaseResponse<Employee[]> = await res.json();
  if (json.status !== "success" || !json.data) {
    throw new Error(json.message ?? "Failed to fetch employees");
  }
  return json.data;
}
