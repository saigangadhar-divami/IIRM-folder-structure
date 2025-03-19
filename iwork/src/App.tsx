import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/Signup";
import SignIn from "./components/SignIn";
import CompanyTable from "./components/CompanyTable";
import Header from "./common/Header";
import EmployeeForm from "./pages/EmployeeForm";
import EmployeeTable from "./components/EmployeeTable";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/home" element={<CompanyTable />} />
        <Route path="/employee" element={<EmployeeTable />} />
      </Routes>
      <EmployeeForm />
    </>
  );
}

export default App;
