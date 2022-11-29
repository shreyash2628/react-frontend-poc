import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import axios, { isCancel, AxiosError } from "axios";

import DataTable from "react-data-table-component";
import { useLocation } from "react-router-dom";

function EmployeeList() {
  const [rows, setRows] = useState([]);

  const location = useLocation();
  console.log(location.state);

  useEffect(() => {
    // console.log("hi")
    axios.get(`http://localhost:3004/employeeData`).then((res) => { //tried fake api
      //  console.log(res.data)
      setRows(res.data);
    });
  }, []);

  const columnsField = [
    { name: "Employee ID", selector: (row) => row.employeeId },
    { name: "Employee Name", selector: (row) => row.employeeName },
    { name: "Designation", selector: (row) => row.designation },
    { name: "Department", selector: (row) => row.department },
    { name: "Phone Number", selector: (row) => row.phoneNumber },
    { name: "Email ID", selector: (row) => row.emailId },
  ];
  const customStyles = {
    rows: {
      style: {
        minHeight: "60px", // override the row height
      },
    },
    headCells: {
      style: {
        paddingLeft: "5px", // override the cell padding for head cells
        paddingRight: "5px",
        marginRight: "15px",
      },
    },
    cells: {
      style: {
        paddingLeft: "2px", // override the cell padding for data cells
        paddingRight: "2px",
      },
    },
  };

  return (
    <>
      <DataTable
        columns={columnsField}
        data={rows}
        className="mt-20  ml-2 mr-30 my-20 px-1 border "
        responsive
        customStyles={customStyles}
      />
    </>
  );
}

export default EmployeeList;
