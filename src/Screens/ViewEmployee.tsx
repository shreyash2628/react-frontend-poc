import React from "react";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Navigate, useNavigate,Link ,useLocation} from 'react-router-dom';


function ViewEmployee() {

  const navigate = useNavigate()

const locationState = useLocation().state as {id: string};
const id=locationState.id;

  console.log()
const x:string="hi"
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));



  return (
    <div className="">

      <Card className=" py-20 px-28 mx-28 my-24 border rounded-2xl shadow-lg bg-slate-800 object-right">
        <div className="flex flex-col">

          <div className="flex flex-row ">
            <Avatar className="mr-4 mt-2" />
            <div className="flex flex-col">
              <h1 className="text-center text-2xl font-bold">Shreyash Pawar</h1>
              <h1>shreyash.pawar@blueconchtech.com</h1>
            </div>

         
         
          </div>
      

            kgikhkbl
            <TextField id="filled-basic" label="Employee Name" variant="filled"  defaultValue={x}/>

        </div>
      </Card>
    </div>
  );
}

export default ViewEmployee;
