import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/Signup";
import SignIn from "./components/SignIn";
import CompanyTable from "./components/CompanyTable";
import Header from "./common/Header";
import EmployeeForm from "./pages/EmployeeForm";

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/home" element={<CompanyTable />} />
        </Routes>
        <EmployeeForm />
    </>
  );
};

export default App;
