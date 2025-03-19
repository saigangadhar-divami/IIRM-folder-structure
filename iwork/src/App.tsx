import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/Signup";
import SignIn from "./components/SignIn";
import CompanyTable from "./components/CompanyTable";
import Header from "./common/Header";
import EmployeeForm from "./pages/EmployeeForm";
import EmployeeTable from "./components/EmployeeTable";
import EmployeeDetails from "./components/EmployeeDetails";
import CompanyDetails from "./components/CompanyDetails";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/company" element={<CompanyTable />} />
        <Route path="/employee" element={<EmployeeTable />} />
        <Route path="/employeeDetails/:id" element={<EmployeeDetails />} />
        <Route path="/company/:id" element={<CompanyDetails />} />
      </Routes>
      {/* <EmployeeForm /> */}
    </>
  ); 
}

export default App;
