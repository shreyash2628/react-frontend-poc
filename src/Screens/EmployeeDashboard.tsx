import TopNavBar from '../Components/TopNavBar'

import AddEmployeeDetails from './AddEmployeeDetails';

import { Navigate, useNavigate,Link } from 'react-router-dom';
// import EmployeeList from './EmployeeList'
import { useState,useEffect } from "react";
import TextField from "@mui/material/TextField";
import LogoutIcon from '@mui/icons-material/Logout';


import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

import EmpOperations from './EmpOperations';


function EmployeeDashboard() {
      const navigate = useNavigate()

      


      
    const Transition = React.forwardRef(function Transition(
      props: TransitionProps & {
        children: React.ReactElement<any, any>;
      },
      ref: React.Ref<unknown>,
    ) {
      return <Slide direction="up" ref={ref} {...props} />;
    });

  const [open, setOpen] = React.useState(false);

 
  const[empName,setEmpName] = useState('')
  const[token,setToken] = useState('')
  const[designation,setDesignation] = useState('')
  const[phoneNumber,setPhoneNumber] = useState('')
  const[department,setDepartment] = useState('')
  const[empID,setEmpID] = useState('')
  // const[loginStatus,setLoginStatus] = useState("")




  
  const url=`http://127.0.0.1:8000/api/employee/`

   const loginToken =localStorage.getItem("LoginToken")
   const signUpToken=localStorage.getItem("SignUp")


   useEffect(() => {
    // const lstatus=localStorage.getItem("LoginStatus")
      // console.log("🚀 ~ file: EmployeeDashboard.tsx:64 ~ useEffect ~ lstatus", lstatus)
      // console.log(lstatus)
  });


  

   

  const handleClickOpen = () => {
    // setOpen(true);
    navigate('/addEmployeeDetails')
  };

  const handleClose = () => {
    setOpen(false);
  };


  function handleSubmit(e:any)
  {
    e.preventDefault()
    navigate("/employeeDashboard")


    //data=signup token
    console.log("SignUp token is "+signUpToken)
    console.log("Login token is " + loginToken)

    

   
    console.log(empName+" "+  designation +" "+ phoneNumber + " "+ department + " " +empID)

    const empData =
      {
        "name": empName,
        "department": department,
        "designation": designation,
        "phonenumber": phoneNumber
    }
            fetch(url, {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Token ${loginToken}`
              },

              body: JSON.stringify(empData),
          }).then((response) => {
              console.log(response);
          });


  }

  const logout=()=>
  {

    console.log(loginToken)
    fetch("http://127.0.0.1:8000/api/auth/logout", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Authorization": `Token ${loginToken}`
      },

  }).then((response) => {
      console.log(response);
      localStorage.setItem("LogInStatus","false")
      navigate('/')
    });


  }

  return (

    <div>
       <button onClick={() => navigate('/addEmployeeDetails')} className='rounded bg-blue-600 mx-2 px-2 py-1 my-2 text-white'>Add Employees</button>

        <button onClick={()=>logout()} className="float-right mx-2 my-2 bg-red-500 text-white px-1 py-1 rounded"><LogoutIcon/>  LOGOUT</button>              
                      
                      
                      
            
           
                 <EmpOperations/>
    </div>
  )
}

export default EmployeeDashboard



