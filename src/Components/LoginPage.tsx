import React, { useState,useEffect } from "react";
import sweetAlert from "sweetalert2";
import { Navigate, useNavigate, Link, useLocation } from "react-router-dom";

import { NavLink } from "react-router-dom";
import axios from "axios";
import { doLogin, isLoggedIn } from "../api";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Swal = require("sweetalert2");

function LoginPage() {
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const [jwtToken, setJwtToken] = useState("");

  const [correctUser, setCorrectUser] = useState(false);
  const [userErrMsg, setUserErrMsg] = useState("");

  const [correctPass, setCorrectPass] = useState(false);
  const [passErrMsg, setPassErrMsg] = useState("");

  const [userErr, setUserErr] = useState("");
  const [passErr, setPassErr] = useState("");
  const [isUserValidated, setUserValidated] = useState(false);
  const [isPasswordValidated, setPasswordValidated] = useState(false);

  let loginToken;

  const [values, setValues] = useState({
    name: "",
    password: "",
  });

  useEffect(() => {
    // localStorage.setItem("LogInStatus",(false))


    
  // console.log("🚀 ~ file: TopNavBar.tsx:138 ~ useEffect ~ status", status)

  });

  const loginHandle = (e: any) => {
    e.preventDefault();

   

    const logInData = {
      username: user,
      password: password,
    };

    axios
      .post("http://127.0.0.1:8000/api/auth/login", logInData)
      .then((data) => {
        loginToken = data.data.token;
        console.log("Login Token is " + loginToken);

        localStorage.setItem("LoginToken", loginToken);
        localStorage.setItem("LogInStatus", "true");

        if (isLoggedIn()) {
          //will check if token is stored or not
          Swal.fire({
            icon: "success",
            title: "Login Successfull",
          });

          navigate("/employeeDashboard");
          console.log("Logged in Username = " + user);
          console.log("Logged in Password = " + password);
        } 
      })
      .catch((error) => {
        console.log("USER NOT FOUND");

        console.log(error.response.data);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Invalid Credentials",
        });
      });
  };
  const [errors, setErrors] = React.useState<any>({});

  return (
    <div>
      <section className="min-h-screen flex flex-col">
        <div className="flex flex-1 items-center justify-center">
          <div className="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
            <form onSubmit={loginHandle} className="text-center">
              <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                LOG IN
              </h1>

              <div className="py-2 text-left">
                <input
                  type="text"
                  onChange={(e) => setUser(e.target.value)}
                  className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                  placeholder="Username"
                />
                <br></br>
                {correctUser ? (
                  <span className="text-red-500 px-2">{userErrMsg}</span>
                ) : (
                  ""
                )}
              </div>
              {/* pattern="[A-Za-z]{10}"  */}

              <div className="py-2 text-left">
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                  placeholder="Password"
                />
                <br></br>
                {correctPass ? (
                  <span className="text-red-500 px-2">{passErrMsg}</span>
                ) : (
                  ""
                )}
              </div>
              {/* onClick={()=>loginHandle} */}
              <div className="py-2">
                <button
                  type="submit"
                  className="border-2 border-gray-100 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700"
                >
                  Log In
                </button>
              </div>
            </form>

            <div className="text-center mt-4">
              <span>Dont have an account?</span>
              <NavLink
                to="/SignUpPage"
                className="font-light text-md text-indigo-600 underline font-semibold hover:text-indigo-800"
              >
                Create an account
              </NavLink>
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </div>
  );
}

export default LoginPage;
