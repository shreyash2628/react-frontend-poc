import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage  from './Components/LoginPage';
import TopNavBar from './Components/TopNavBar';
import HomePage from './Screens/HomePage';
// import EmployeeList from './Screens/EmployeeList';
// import EmployeeList from './Screens/EmployeeList';
import { BrowserRouter, Routes, Route  } from 'react-router-dom'

import AddEmployeeDetails from './Screens/AddEmployeeDetails';
import EmployeeDashboard from './Screens/EmployeeDashboard';
import EmployeeList from './Screens/EmployeeList';
import ViewEmployee from './Screens/ViewEmployee';


function App() {
  return (
    <div className="App">
    <BrowserRouter>

  
          <TopNavBar/>


    <Routes>
         
      <Route  path="/" element={<HomePage/>} />

      {/* // <Route exact path="/login" element={<FormUser/>} /> */}
      


      
        <Route path="/employeeList" element={<EmployeeList  />} />
        <Route path="/employeeDashboard" element={<EmployeeDashboard  />} />
        <Route path="/addEmployeeDetails" element={<AddEmployeeDetails  />} />
        <Route path="/viewEmployee" element={<ViewEmployee  />} />



       

      {/* </Route> */}

     

    </Routes>
   


  </BrowserRouter>













    </div>
  );
}

export default App;
