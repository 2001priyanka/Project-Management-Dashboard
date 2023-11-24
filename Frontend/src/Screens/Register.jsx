// import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import { API_URL } from "../../../Config";
const Login = () => {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    username:"",
    email: "",
    password: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    //APICALL
    console.log("registerData");
    try {
      axios({
        url: "http://localhost:5000/api/users/register",
        method: "POST",
        data: {
          ...registerData,
        },
      })
        .then((res) => {
          console.log("registerData", res);
          setRegisterData(res?.data?.success);
          console.log("res", res?.data?.success);
          navigate("/homescreen");
          //  dispatch(setLoggedInUser(res?.data));
        })
        .catch((err) => {
          console.log("registerData AXIOS ERROR", err);
        });
    } catch (error) {
      console.log("registerData CATCH ERROR", error);
    }
  };

  // const apiUrl = "https://api.example.com/login"; // Replace with your API URL

  // Define the login function

  return (
    <div className={`w-screen h-screen`}>
      <div className="container mx-auto">
        <div className="flex w-11/12 m-auto max-w-md h-screen justify-center items-center">
          <div className="h-max w-full bg-white shadow-md rounded-xl p-10">
            <p className="text-2xl mb-5 font-bold text-center">Register</p>
            <form className=" mb-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  UserName
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="UserName"
                  type="text"
                  placeholder="UserName"
                  name="UserName"
                  onChange={(e) =>
                    setRegisterData({
                      // ...registerData,
                      // [e.target.email]: e.target.value,
                      ...registerData,
                      username: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Email"
                  type="text"
                  placeholder="Email"
                  name="Email"
                  onChange={(e) =>
                    setRegisterData({
                      // ...registerData,
                      // [e.target.email]: e.target.value,
                      ...registerData,
                      email: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="******************"
                  name="password"
                  onChange={(e) =>
                    setRegisterData({
                      // ...registerData,
                      // [e.target.password]: e.target.value,
                      ...registerData,
                      password: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                {/* <div className="flex flex-col">
                  <Link
                    to="/"
                    class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-dark-purple"
                    // href="#"
                  >
                    Forgot Password?
                  </Link>
                </div> */}

                <button
                  className="bg-blue-500 hover:bg-dark-purple text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={(e) => submitHandler(e)}
                >
                  Register
                </button>
                <div
                  className=" hover:bg-dark-purple  text-blue-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  // onClick={(e) => submitHandler(e)}
                >
                  <Link
                    to="/"
                    class="inline-block align-baseline font-bold text-md text-blue-500 hover:text-dark-purple"
                    // href="#"
                  >
                    Login
                  </Link>
                </div>
                {/* </Link> */}
              </div>
              <div>
                <div className="flex flex-col mt-4">
                  <Link
                    to="/"
                    class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-dark-purple"
                    // href="#"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
