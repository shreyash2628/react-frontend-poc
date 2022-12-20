// import React from "react";
import TextField from "@mui/material/TextField";
import { Navigate, useNavigate, Link, useLocation } from "react-router-dom";

import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";

import { useState, useEffect } from "react";

function AddEmployeeDetails() {
  const navigate = useNavigate();

  const location = useLocation();

  // const  loginToken ;

  const [empName, setEmpName] = useState("");
  const [token, setToken] = useState("");
  const [designation, setDesignation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [department, setDepartment] = useState("");
  const [empID, setEmpID] = useState("");

  const url = `http://127.0.0.1:8000/api/employee/`;

  const loginToken = localStorage.getItem("LoginToken");
  const signUpToken = localStorage.getItem("SignUp");

  function handleSubmit(e: any) {
    e.preventDefault();
    

    //data=signup token
    // console.log("SignUp token is " + signUpToken);
    // console.log("Login token is " + loginToken);

    // console.log(
    //   empName +
    //     " " +
    //     designation +
    //     " " +
    //     phoneNumber +
    //     " " +
    //     department +
    //     " " +
    //     empID
    // );

    const empData = {
      name: empName,
      department: department,
      designation: designation,
      phonenumber: phoneNumber,
    };

    if (phoneNumber.length!=10 ) {
      // alert("Wrong Number")
      toast.warn("Invalid Mobile Number!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${loginToken}`,
        },

        body: JSON.stringify(empData),
      }).then((response) => {
        console.log(response);

        Swal.fire({
          title: "Success!",
          text: "Employee Added",
          icon: "success",
          confirmButtonText: "Cool",
        });
        navigate("/employeeDashboard");
      });
    }
  }

  return (
   
   
    <div
      className="flex flex-col 
      items-center justify-center w-auto  mt-8"
    >

      <div className="border px-8 py-8 shadow-2xl rounded-md">

      <h1 className="my-4 font-weight-bold .display-4 text-2xl font-semibold">Add Employee</h1>
      <form onSubmit={handleSubmit} className="flex flex-col w-96  ">
        <TextField
          onChange={(e) => setEmpName(e.target.value)}
          label="Employee Name"
          name="employeename"
          type="text"
          required
        />
        <br></br>
        <TextField
          onChange={(e) => setDesignation(e.target.value)}
          label="Designation"
          name="designation"
          type="text"
          required
        />
        <br></br>
        <TextField
          onChange={(e) => setPhoneNumber(e.target.value)}
          label="PhoneNo"
          name="phoneNo"
          type="number"
          required
        />
        <br></br>
        <TextField
          onChange={(e) => setDepartment(e.target.value)}
          label="Department"
          name="department"
          type="text"
          required
        />
        <br></br>

        <div className="flex flex-row">
          <button
            className="btn btn-dark mt-3 rounded text-black bg-green-400 px-10 py-2"
            type="submit"
          >
            ADD
          </button>
          <button onClick={()=>navigate('/employeeDashboard')} className="btn btn-danger mt-3 ml-3 bg-red-600 text-white px-10 py-2" type="reset">Cancle</button>
        </div>
      </form>


      </div>
     
      <ToastContainer />
    </div>
  );
}

export default AddEmployeeDetails;
