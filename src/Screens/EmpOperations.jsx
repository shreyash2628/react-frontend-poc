import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Swal from "sweetalert2";

import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import { Navigate, useNavigate, Link } from "react-router-dom";

import { useState, useEffect } from "react";
import axios, { isCancel, AxiosError } from "axios";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function EmpOperations() {
  const [rows, setRows] = useState([]);

  const navigate = useNavigate();

  const [selectedRow, setSelectedRow] = React.useState({});
  const [selectedEditRow, setSelectedEditRow] = React.useState({});

  const loginToken = localStorage.getItem("LoginToken");

  const [openView, setOpenView] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);

  //Edit
  const [token, setToken] = useState("");

  const [empName, setEmpName] = useState("");
  const [designation, setDesignation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [department, setDepartment] = useState("");
  const [empID, setEmpID] = useState("");
  //Edit

  const [editEmpName, setEditEmpName] = useState("");
  const [viewDesignation, setViewDesignation] = useState("");
  const [viewPhoneNumber, setViewPhoneNumber] = useState("");
  const [viewDepartment, setViewDepartment] = useState("");
  const [viewEmpID, setViewEmpID] = useState("");
  const [delId, setDelId] = useState("");
  const [empData, setEmpData] = useState();

  const handleClickViewOpen = (id) => {
    setOpenView(true);
    setSelectedRow(id);
  };
  // const [open, setOpen] = React.useState(false);

  const handleClickOpenView = (row) => {
    setOpenView(true);
    setSelectedRow(row);
  };

  const handleClickOpenEdit = (row) => {
    setOpenEdit(true);
    setSelectedEditRow(row);
  };

  const handleCloseView = () => {
    setOpenView(false);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  useEffect(() => {
    //   console.log("hi emp operations")

    fetch("http://127.0.0.1:8000/api/employee/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${loginToken}`,
      },

      // body: JSON.stringify(empData),
    })
      .then((response) => response.json())
      .then((data) => {
        setRows(data);
      });
  }, []);

  var id = 0;

  function deleteEmployee(id) {
    fetch("http://127.0.0.1:8000/api/employee/" + id + "/", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${loginToken}`,
      },

    }).then((data) => {
      
      Swal.fire("Deleted!", "Data has been deleted.", "success");
    });
  }


  function handleDeleteBtn(id) {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // console.log("called delete api");
        deleteEmployee(id);
      }
    });
  }

  function selectedRowFun(selectedRow) {
    return selectedRow;
  }

  function handleEditSubmit(e: any) {
    e.preventDefault();
    const rowValue = selectedEditRow;
    // console.log("Selected Edit Row is " + rowValue.id);

    // console.log(
    //    empName +
    //     "  " +
    //     designation +
    //     " " +
    //     phoneNumber +
    //     " " +
    //     department +
    //     " " +
    //     empID +
    //     "=>" +
    //     rowValue
    // );

    const updatedEmpData = {
      name: empName,
      department: department,
      designation: designation,
      phonenumber: phoneNumber,
    };

    const updateId=rowValue.id
    // console.log(
    //   "🚀 ~ file: EmpOperations.jsx:189 ~ EmpOperations ~ rowValue",
    //   rowValue.id
    // );


    fetch("http://127.0.0.1:8000/api/employee/"+updateId+"/" , {
      method: "PUT",
      headers: {
          "Content-Type": "application/json",
          "Authorization": `Token ${loginToken}`
      },

      body: JSON.stringify(updatedEmpData),
  }).then((response) => {
    
    Swal.fire({
      title: 'Success!',
      text: 'Employee Updated',
      icon: 'success',
      confirmButtonText: 'Cool'
    })
    // window.location.reload();

      // console.log(response);
  });



  }


  const handleRowClick = (e) => {
    // console.log(e.target.value);
  };

  return (
    <div>
      <Box textAlign="center" p={2}>
        <Typography variant="h4">Employee Details </Typography>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#cccccc" }}>
              {/* className={classes.tableHeadCell} */}
              <TableCell align="center" className="text-white">
                Employee ID
              </TableCell>
              <TableCell align="center" className="text-white">
                Employee Name
              </TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row, name) => {
              return (
                <TableRow key={name}>
                  <TableCell align="center">{row.id}</TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">
                    {/* VIEW TOOLTIP */}

                    <Tooltip title="View">
                      <IconButton>
                        <VisibilityIcon
                          onClick={() => handleClickOpenView(row)}
                        />

                        <Dialog open={openView} onClose={handleCloseView}>
                          <DialogContent>
                            <Card className="w-[500px] px-4  shadow-lg  object-right my-4 mx-2">
                              <div className="flex flex-col">
                                <div className="flex flex-row ">
                                  <Avatar className="mr-4 mt-2" />
                                  <div className="flex flex-col mb-4">
                                    <h1 className="text-center text-2xl font-bold">
                                      {selectedRow.name}
                                    </h1>
                                    <h1>{selectedRow.designation}</h1>
                                  </div>
                                </div>

                               


                              <TextField 
                                    label="Employee ID"

                                    type='text' 
                                    defaultValue={selectedRow.id}
                                    variant='filled'
                                    inputProps={
                                      { readOnly: true, }
                                    }
                                  />  


                                <br></br>
                                <TextField 
                                    type='text' 
                                    label="Employee Name"
                                    defaultValue={selectedRow.name}
                                    variant="filled"
                                    inputProps={
                                      { readOnly: true, }
                                    }
                                  />  
                              
                                <br></br>
                                <TextField 
                                    type='text' 
                                    label="Designation"
                                    defaultValue={selectedRow.designation}
                                    variant="filled"
                                    inputProps={
                                      { readOnly: true, }
                                    }
                                  /> 
                                <br></br>
                                <TextField 
                                    type='text' 
                                    label="Department"
                                    defaultValue={selectedRow.department}
                                    variant="filled"
                                    inputProps={
                                      { readOnly: true, }
                                    }
                                  /> 
                                <br></br>
                                <TextField 
                                    type='text' 
                                    label="Phone Number"
                                    defaultValue={selectedRow.phonenumber}
                                    variant="filled"
                                    inputProps={
                                      { readOnly: true, }
                                    }
                                  />
                                <br></br>
                              </div>
                            </Card>
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={handleCloseView}>Cancel</Button>
                          </DialogActions>
                        </Dialog>
                      </IconButton>
                    </Tooltip>

                    {/* EDIT TOOLTIP */}

                    <Tooltip title="Edit">
                      <IconButton>
                        <EditIcon onClick={() => handleClickOpenEdit(row)} />

                        <Dialog open={openEdit} onClose={handleCloseEdit}>
                          <DialogContent>
                            <div className="flex flex-col w-96">
                              <form
                                onSubmit={handleEditSubmit}
                                className="flex flex-col "
                              >
                                <TextField
                                  // value={selectedEditRow.name}
                                  onChange={(e) => setEmpName(e.target.value)}
                                  label="Employee Name"
                                  name="employeename"
                                  type="text"
                                  required
                                  defaultValue={selectedEditRow.name}
                                    // preventDefault
                                    // initialName={selectedEditRow.name}

                                />


                           
                                <br></br>
                                <TextField
                                  onChange={(e) =>
                                    setDesignation(e.target.value)
                                  }
                                  label="Designation"
                                  name="designation"
                                  type="text"
                                  required
                                  defaultValue={selectedEditRow.designation}
                                  // value={selectedEditRow.designation}

                                />
                                <br></br>
                                <TextField
                                  onChange={(e) =>
                                    setPhoneNumber(e.target.value)
                                  }
                                  label="PhoneNo"
                                  name="phoneNo"
                                  type="number"
                                  required
                                  defaultValue={selectedEditRow.phonenumber}
                                  // value={selectedEditRow.phonenumber}

                                />
                                <br></br>
                                <TextField
                                  onChange={(e) =>
                                    setDepartment(e.target.value)
                                  }
                                  label="Department"
                                  name="department"
                                  type="text"
                                  required
                                  defaultValue={selectedEditRow.department}
                                  // value={selectedEditRow.department}
                                  // (e) =>setDepartment(e.target.value)

                                />
                                <br></br>

                                <div className="flex flex-row">
                                  <button
                                    onClick={handleCloseEdit}
                                    className="btn btn-dark mt-3 rounded text-black bg-green-400 px-10 py-2"
                                    type="submit"
                                  >
                                    Register
                                  </button>
                                </div>
                              </form>
                            </div>
                          </DialogContent>

                          <DialogActions>
                            <Button onClick={handleCloseEdit}>Cancel</Button>
                          </DialogActions>
                        </Dialog>
                      </IconButton>
                    </Tooltip>

                    {/* DELETE TOOLTIP */}

                    <Tooltip
                      title="Delete"
                      onClick={() => handleDeleteBtn(row.id)}
                    >
                      <IconButton>
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
