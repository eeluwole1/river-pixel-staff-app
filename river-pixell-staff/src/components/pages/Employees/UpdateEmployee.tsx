import { useParams } from "react-router";
import { EmployeeForm } from "../../employee-list/EmployeeForm/EmployeeForm";

export function UpdateEmployee() {
  const { id } = useParams();
  return <EmployeeForm formMode="edit" employeeId={id!} />;
}
