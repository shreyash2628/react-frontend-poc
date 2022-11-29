import React from "react";
import TextField from "@mui/material/TextField";
import { Navigate, useNavigate, Link, useLocation } from "react-router-dom";

function AddEmployeeDetails() {
  const navigate = useNavigate();

  const locationState = useLocation().state as { id: string };
  const id = locationState.id;

  return (
    <div>
      <form className="ml-4 mt-10 px-10">
        <label className="mx-2  ">
          Employee Name:
          <br />
          <input
            className="rounded border mx-2 my-2 py-1 w-96 border-black"
            type="text"
            name="name"
          />
          <br />
        </label>

        <label className="mx-2">
          Designation:
          <br />
          <input
            className="rounded border mx-2 my-2 py-1 w-96 border-black"
            type="text"
            name="name"
          />
          <br />
        </label>

        <label className="mx-2">
          Department:
          <br />
          <input
            className="rounded border mx-2 my-2 py-1 w-96 border-black"
            type="text"
            name="name"
          />
          <br />
        </label>

        <label className="mx-2">
          Phone Number:
          <br />
          <input
            className="rounded border mx-2 my-2 py-1 w-96 border-black"
            type="text"
            name="name"
          />
          <br />
        </label>

        <label className="mx-2">
          Email ID:
          <br />
          <input
            className="rounded border mx-2 my-2  py-1 w-96 border-black"
            type="text"
            name="name"
          />
          <br />
        </label>

        <label className="mx-2">
          Employee ID:
          <br />
          <input
            className="rounded border mx-2 my-2 py-1 w-96 border-black"
            type="text"
            name="name"
          />
          <br />
        </label>

        <button
          onClick={() => navigate("/employeeDashboard")}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 mx-3 my-4 px-4 border border-blue-700 rounded"
        ></button>

        {/* <button onClick={ ()=>navigate('/employeeList') } className="border rounded m-4 place-content-end	 bg-white text-black">
                Employee List
            </button> */}
      </form>
    </div>
  );
}

export default AddEmployeeDetails;
