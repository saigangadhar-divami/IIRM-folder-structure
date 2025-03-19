import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/Signup";
import SignIn from "./components/SignIn";
import CompanyTable from "./components/CompanyTable";
import Header from "./common/Header";
import EmployeeForm from "./pages/EmployeeForm";
import AddCompany from "./pages/AddCompany";
import RichText from "./common/RichText";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const handleChange = (value: string) => {
    setValue(value);
  };
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/home" element={<CompanyTable />} />
          <Route path="/add-company" element={<AddCompany/>} />
          {/* <Route path="/editor" element={
            <RichText 
              value={value} 
              onChange={handleChange}
              type="richtext"
              className="RichText"
            />
          } /> */}
        </Routes>
        {/* <EmployeeForm /> */}
    </>
  );
};

export default App;
