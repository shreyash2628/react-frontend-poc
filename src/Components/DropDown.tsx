import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";

import MenuIcon from "@mui/icons-material/Menu";

import LoginGIF from "../Images/Log.gif";
import LoginPage from "./LoginPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";

export default function DropDown() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent<unknown>,
    reason?: string
  ) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleClickOpen}
        className="bg-black mx-2 my-2 rounded text-white content-start hover:animate-bounce"
      >
        <MenuIcon />
      </button>
      Employee Management App
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <LoginPage closeDialog={handleClose} />
        <SignUp signupClose={handleClose} />

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
