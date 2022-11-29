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
import { Button } from "@mui/material";

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

  useEffect(() => {
    // console.log("hi emp operations")
    axios.get(`http://localhost:3004/employeeData`).then((res) => {
      //  console.log(res.data)
      setRows(res.data);
    });
  }, []);

  var id = 0;

  function handleViewAction(id) {
    console.log(id);
  }

  return (
    <div>
      {/* 
    <TableContainer className="px-32 py-12" component={Paper}>
      <Table className=''  aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Employee Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Actions&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.EmployeeName}>
              <StyledTableCell component="th" scope="row">
                {row.EmployeeName}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Email}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> */}

      <Box textAlign="center" p={2}>
        <Typography variant="h4">Employee Details </Typography>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#cccccc" }}>
              {/* className={classes.tableHeadCell} */}
              <TableCell align="center" className="text-white">
                Employee Name
              </TableCell>
              <TableCell align="center" className="text-white">
                Employee ID
              </TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row, employeeName) => {
              return (
                <TableRow key={employeeName}>
                  <TableCell align="center">{row.employeeName}</TableCell>
                  <TableCell align="center">{row.employeeId}</TableCell>
                  <TableCell align="center">{row.emailId}</TableCell>
                  <TableCell align="center">
                    <Tooltip
                      title="View"
                      onClick={() =>
                        navigate("/viewEmployee", {
                          state: { id: row.employeeId },
                        })
                      }
                    >
                      <IconButton>
                        <VisibilityIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip
                      title="Edit"
                      onClick={() =>
                        navigate("/addEmployeeDetails", console.log("hello"))
                      }
                    >
                      <IconButton>
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
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

// import { Typography, Box, makeStyles, Grid, TextField, Button } from "@material-ui/core"
// import { deepPurple, green } from '@material-ui/core/colors';
// // import List from "../student/List";
// // import axios from "axios";
// import { useState } from "react";

// const useStyles = makeStyles({
//  headingColor: {
//   backgroundColor: deepPurple[400],
//   color: "white"
//  },
//  addStuColor: {
//   backgroundColor: green[400],
//   color: "white"
//  },
// })

// const EmpOperations = () => {
//  const classes = useStyles();
//  const [student, setStudent] = useState({
//   stuname: "",
//   email: ""
//  });

//yaha se
//  const [status, setStatus] = useState();

//  function onTextFieldChange(e) {
//   setStudent({
//    ...student,
//    [e.target.name]: e.target.value
//   })
//  }

//  async function onFormSubmit(e) {
//   e.preventDefault()
//   try {
//    await axios.post(`http://localhost:3333/students`, student)
//    setStatus(true);
//   } catch (error) {
//    console.log("Something is Wrong");
//   }
//  }
//  if (status) {
//   return <Home />
//  }
//yaha tk

//  return (
//   <>

//    <Box textAlign="center" className={classes.headingColor} p={2} mb={2}>
//     <Typography variant="h2">React CRUD with API Call</Typography>
//    </Box>
//    <Grid container justify="center" spacing={4}>

//     <Grid item md={6} xs={12}>
//      <Box textAlign="center" p={2} className={classes.addStuColor} mb={2}>
//       <Typography variant="h4">Add Student</Typography>
//      </Box>
//      <form noValidate>
//       <Grid container spacing={2}>
//        <Grid item xs={12}>
//         <TextField autoComplete="stuname" name="stuname" variant="outlined" required fullWidth id="stuname" label="Name" onChange={e => onTextFieldChange(e)}
//         />
//        </Grid>
//        <Grid item xs={12}>
//         <TextField autoComplete="email" name="email" variant="outlined" required fullWidth id="email" label="Email Address" onChange={e => onTextFieldChange(e)} />
//        </Grid>
//       </Grid>
//       <Box m={3}>
//        <Button type="submit" variant="contained" color="primary" fullWidth onClick={e => onFormSubmit(e)}>Add</Button>
//       </Box>
//      </form>
//     </Grid>

//     <Grid item md={6} xs={12}>
//      <List />
//     </Grid>
//    </Grid>

//   </>
//  )
// }

// export default EmpOperations

// import { Typography, Box, makeStyles, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper, IconButton, Tooltip } from "@material-ui/core"
// import { orange } from '@material-ui/core/colors';
// import VisibilityIcon from '@material-ui/icons/Visibility';
// import EditIcon from '@material-ui/icons/Edit';
// import DeleteIcon from '@material-ui/icons/Delete';
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { useState, useEffect } from "react";
// const useStyles = makeStyles({
//  stuListColor: {
//   backgroundColor: orange[400],
//   color: "white"
//  },
//  tableHeadCell: {
//   color: "white",
//   fontWeight: "bold",
//   fontSize: 16
//  },
// })

// const List = () => {
//  const classes = useStyles();
//  const [students, setStudents] = useState([]);

//  useEffect(() => {
//   async function getAllStudent() {
//    try {
//     const students = await axios.get("http://localhost:3333/students")
//     // console.log(students.data);
//     setStudents(students.data);
//    } catch (error) {
//     console.log("Something is Wrong");
//    }
//   }
//   getAllStudent();
//  }, [])

//  const handleDelete = async id => {
//   await axios.delete(`http://localhost:3333/students/${id}`);
//   var newstudent = students.filter((item) => {
//    // console.log(item);
//    return item.id !== id;
//   })
//   setStudents(newstudent);
//  }

//  return (
//   <>
//    <Box textAlign="center" p={2} className={classes.stuListColor}>
//     <Typography variant="h4">Student List</Typography>
//    </Box>
//    <TableContainer component={Paper}>
//     <Table>
//      <TableHead>
//       <TableRow style={{ backgroundColor: "#616161" }}>
//        <TableCell align="center" className={classes.tableHeadCell}>No</TableCell>
//        <TableCell align="center" className={classes.tableHeadCell}>Name</TableCell>
//        <TableCell align="center" className={classes.tableHeadCell}>Email</TableCell>
//        <TableCell align="center" className={classes.tableHeadCell}>Action</TableCell>
//       </TableRow>
//      </TableHead>
//      <TableBody>
//       {
//        students.map((student, i) => {
//         return (
//          <TableRow key={i}>
//           <TableCell align="center">{i + 1}</TableCell>
//           <TableCell align="center">{student.stuname}</TableCell>
//           <TableCell align="center">{student.email}</TableCell>
//           <TableCell align="center">
//            <Tooltip title="View">
//             <IconButton><Link to={`/view/${student.id}`}><VisibilityIcon color="primary" /></Link></IconButton>
//            </Tooltip>
//            <Tooltip title="Edit">
//             <IconButton><Link to={`/edit/${student.id}`}><EditIcon /></Link></IconButton>
//            </Tooltip>
//            <Tooltip title="Delete">
//             <IconButton onClick={() => handleDelete(student.id)}><DeleteIcon color="secondary" /></IconButton>
//            </Tooltip>
//           </TableCell>
//          </TableRow>
//         )
//        })
//       }

//      </TableBody>
//     </Table>
//    </TableContainer>
//   </>
//  )
// }

// export default EmpOperations
