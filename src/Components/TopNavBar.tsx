import React from "react";
import Button from "@mui/material/Button";
import HelloGIF from "../Images/Hello.gif";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import DropDown from "./DropDown";
import { Navigate, useNavigate, Link } from "react-router-dom";

function AppBar() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="max-w-auto h-14 bg-black text-white content-start w-full">
        <div className="flex flex-row place-content-start">
          <DropDown />

          <div className="flex flex-row bg-black w-auto h-14 place-content-end ">
            <button
              onClick={() => navigate("/employeeList")}
              className="border rounded m-4 place-content-end	 bg-white text-black"
            >
              Employee List
            </button>

            {/* <button
            onClick={() => navigate("/employeeList")}
            className="border rounded m-4 	m-2 p-2 bg-white text-black"
          >
            Create an account
          </button> */}
          </div>
        </div>
      </div>
      {/* //top bar div */}
    </div> //final div
  );
}

export default AppBar;
