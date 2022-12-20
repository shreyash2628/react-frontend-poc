import { Button } from "@mui/material";
import React from "react";
import Welcome from "../Images/Welcome.gif";
function HomePage() {
  return (
    <div>
      <div className="w-screen h-screen ">
        <img
          className=" max-w-full max-h-full object-cover w-screen  "
          src={Welcome}
        />
      </div>
    </div>
  );
}

export default HomePage;
