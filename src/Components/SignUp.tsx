import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import { Label } from "reactstrap";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SignUp(props: any) {
  const [open, setOpen] = React.useState(false);

  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailID, setEmailId] = React.useState("");

  const [registerData, setRegisterData] = React.useState([]);

  const handleClickOpen = () => {
    // props.signupClose
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOnChange = (e: any) => {
    setUserName(e.target.value);
  };

  //   useEffect(() => {
  //     console.log(userName)
  //   });

  const postData = (e: any) => {
    // e.preventDefault();

    console.log("Submiited Successfully!");
    console.log(userName);
    console.log(password);
    console.log(emailID);

    // console.log("Submiited Successfully!")
    // console.log("Submiited Successfully!")

    // setPassword('')
    // setUserName('')
    // setEmailId('')
  };

  return (
    // onClick={props.signupClose}
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        create account
      </Button>

      <div className="w-96">
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"Create your account"}</DialogTitle>
          <DialogContent className="w-96">
            <div className="flex flex-col">
              <form>
                <div className="flex flex-col">
                  <div>
                    <Label>Email : </Label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email *"
                      required
                      value={emailID}
                      onChange={(e) => setEmailId(e.target.value)}
                      style={{
                        marginBottom: "10px",
                        width: "60%",
                        padding: "10px",
                        float: "right",
                      }}
                    />
                  </div>
                  <br></br>
                  <div>
                    <Label>User Name : </Label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      placeholder="User Name *"
                      required
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      style={{
                        marginBottom: "10px",
                        width: "60%",
                        padding: "10px",
                        float: "right",
                      }}
                    />
                  </div>
                  <br></br>
                  <div>
                    <Label>Password : </Label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Password *"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      style={{
                        marginBottom: "10px",
                        width: "60%",
                        padding: "10px",
                        float: "right",
                      }}
                    />
                  </div>
                  <br></br>

                  <Button
                    variant="contained"
                    color="success"
                    onClick={postData}
                    //   onClick={()=>console.log("clicked")}
                    //   onClick={console.log("clicked")}
                  >
                    Submit
                  </Button>
                </div>

                <br />
              </form>
            </div>

            <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
            {/* <Button onClick={handleClose}>Agree</Button> */}
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}
