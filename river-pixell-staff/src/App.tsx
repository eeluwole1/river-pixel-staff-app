
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import { Route, Routes, Navigate, BrowserRouter } from "react-router";
import { Layout } from "./components/layout/Layout";
import { EmployeesPage } from "./components/employee-list/employeeP/EmployeesPage";
import { CreateEmployee } from "./components/pages/Employees/CreateEmployee";
import { UpdateEmployee } from "./components/pages/Employees/UpdateEmployee";
import { Organization } from "./components/organization-list/Organization";
import { ToastContainer } from "react-toastify";


function App() {
  return (
  <BrowserRouter>
      <SignedOut>
      <RedirectToSignIn />
      </SignedOut>
      <SignedIn>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Navigate to="employees" replace />} />
          
      <Route path="employees">
          <Route index element={<EmployeesPage />} />
          <Route path="create" element={<CreateEmployee />} />
          <Route path=":id/edit" element={<UpdateEmployee />} />
      </Route>
      
          <Route path="/organization" element={<Organization />} />
        <Route path="*" element={<Navigate to="employees" replace />} />
        </Route>.
    </Routes>
     </SignedIn>
    <ToastContainer />
    </BrowserRouter>
  );
}

export default App;