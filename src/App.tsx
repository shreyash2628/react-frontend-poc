import "./App.css";
import TopNavBar from "./Components/TopNavBar";
import HomePage from "./Screens/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import AddEmployeeDetails from "./Screens/AddEmployeeDetails";
import EmployeeDashboard from "./Screens/EmployeeDashboard";
import SignUpPage from "./Components/SignUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopNavBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/employeeDashboard" element={<EmployeeDashboard />} />
          <Route path="/addEmployeeDetails" element={<AddEmployeeDetails />} />
          <Route path="/SignUpPage" element={<SignUpPage />} />
          <Route path="/loginPage" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
