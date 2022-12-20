import React, { useState, useEffect } from "react";
import LoginIcon from "@mui/icons-material/Login";
import Button from "@mui/material/Button";
import { Navigate, useNavigate, Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}
const loginToken = localStorage.getItem("LoginToken");

function AppBar() {
  const navigate = useNavigate();
  let EmpList: any = [];

  // const [expanded, setExpanded] = React.useState<string | false>(false);

 

  function handleLog() {
    navigate("/loginPage");
  }

  const [data, setData] = useState([]);

  const viewEmpList = () => {
    handleClickOpenList();

    fetch("http://127.0.0.1:8000/api/emplist/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        
        var i: number;
        for (i = 0; i < data.length; i++) {
          EmpList.push(data[i].name);
        }
        setData(EmpList);
       
      });
  };

  const [msg, setMsg] = useState("");

  const status = localStorage.getItem("LogInStatus");

  useEffect(() => {
    const status = localStorage.getItem("LogInStatus");
  });

  const handleBtnClick = () => {
    navigate("/loginPage");
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [openList, setOpenList] = React.useState(false);

  const handleClickOpenList = () => {
    setOpenList(true);
    // console.log("Opened")
  };
  const handleCloseList = () => {
    setOpenList(false);
  };

  // const check = true;
  // console.log("🚀 ~ file: TopNavBar.tsx:187 ~ AppBar ~ loginStatus", loginStatus)

  return (
    <div>
      <div className="bg-black h-12  flex justify-start">
        <div className="my-2 mx-2 flex flex-row ">
         
          <button
            onClick={() => handleLog()}
            className=" rounded text-white   "
          >
            <LoginIcon />
          </button>

          <button
            className="text-white w-screen sm:w-96 text-left ml-4 	"
            onClick={viewEmpList}
          >
            View Employee List
          </button>

          <div>
            <div className="w-96">

              <BootstrapDialog
                onClose={handleCloseList}
                aria-labelledby="customized-dialog-title"
                open={openList}
              >
                <BootstrapDialogTitle
                  id="customized-dialog-title"
                  onClose={handleCloseList}
                >
                  Employee List
                </BootstrapDialogTitle>
                <DialogContent dividers>
                  <div className="bgck w-96 h-96 ">

                    {
                    data.map((user) => (
                      
                      <li>{user}</li>
                    ))}

                  </div>
                </DialogContent>
                <DialogActions>
                  <Button autoFocus onClick={handleCloseList}>
                    Close
                  </Button>
                </DialogActions>
              </BootstrapDialog>
            </div>
          </div>
        </div>
      </div>
    </div> //final div
  );
}

export default AppBar;
