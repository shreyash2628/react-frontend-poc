import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from '@mui/material/Link';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SignUp from "./SignUp";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate, useNavigate } from "react-router-dom";

// import Button from '@mui/material/Button';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

const theme = createTheme();

export default function LoginPage(props: any) {
  const navigate = useNavigate();

  const [validate, setValidate] = React.useState(false);
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [userNameError, setUserNameError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    console.log(userName);
    console.log(password);

    if (userName.length == 0) {
      setUserNameError(true);
      setValidate(false);
    } else if (password.length == 0) {
      setPasswordError(true);
      setValidate(false);
    } else {
      setValidate(true);
      // navigate
      navigate("/employeeDashboard");
    }
  };

  //SignUp
  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  //SignUp

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container className="" component="main" maxWidth="xs">
        <CssBaseline />

        <Box
          className="sm:bg-gray-200 px-5 py-5 h-auto rounded-2xl"
          // className="sm:ml-10 mr-10 sm:bg-white
          //  md:bg-white ml-8 mr-8
          //  lg:ml-6 mr-6 bg-green-500"
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            className="animate-bounce"
            sx={{ m: 1, bgcolor: "secondary.main" }}
          >
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              className="bg-white rounded"
              margin="normal"
              required
              fullWidth
              id="username"
              label="UserName"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={(e) => setUserName(e.target.value)}
            />

            {userNameError ? (
              <label className="text-red-600 ml-2">
                This field can not be empty
              </label>
            ) : (
              ""
            )}

            <TextField
              className="bg-white rounded"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />

            {passwordError ? (
              <label className="text-red-600 ml-2">
                This field can not be empty
              </label>
            ) : (
              ""
            )}

            <Button
              onClick={props.closeDialog}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            {/* :""} */}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
