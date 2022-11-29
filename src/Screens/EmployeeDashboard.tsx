import React from 'react'
import TopNavBar from '../Components/TopNavBar'
import AddEmployeeDetails from './AddEmployeeDetails'
import { Navigate, useNavigate,Link } from 'react-router-dom';
import EmployeeList from './EmployeeList.js';
import EmpOperations from './EmpOperations.js'
// import EmployeeList from './EmployeeList';

function EmployeeDashboard() {
  const navigate = useNavigate()
  return (

    <div>
            
            <button onClick={ ()=>navigate('/addEmployeeDetails') } className='rounded bg-blue-600 mx-2 px-2 py-1 my-2 text-white'>Add Employees</button>
            {/* <AddEmployeeDetails/> */}
          {/* <EmployeeList/> */}
          <EmpOperations/>
    </div>
  )
}

export default EmployeeDashboard