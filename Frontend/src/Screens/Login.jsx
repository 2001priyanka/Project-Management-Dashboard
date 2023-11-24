// import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import { API_URL } from "../../../Config";
const Login = () => {
  const navigate = useNavigate();
  const [submitData, setSubmitData] = useState({
    email: "",
    password: "",
  });
  //  const [password, setPassword] = useState("myUser");
  //  const [email, setEmail] = useState("123456");

  // const submitLoginData = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await API_URL.post("/users/login", submitData);

  //     if (res.status === 200) {
  //       if (res?.data?.success) {
  //         localStorage.setItem("token", res.data.accessToken);
  //         localStorage.setItem("role", res?.data?.roles?.[0]);
  //         navigate("/HomeScreen");
  //         console.log("res", res.data);
  //         //  toast.success("Login successfull!!!");
  //       }
  //     }
  //   } catch (err) {
  //     console.log(err?.response?.data?.message);
  //     //  toast.error("Login failed!!! " + err?.response?.data?.message);
  //   }
  // };
  const submitHandler = (e) => {
    e.preventDefault();
    //APICALL
    console.log("submitData");
    try {
      axios({
        url: "http://localhost:5000/api/users/login",
        mode: "cors",
        method: "POST",
        data: {
          ...submitData,
        },
        headers: {
          "access-control-allow-origin": "*",
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => {
          console.log("submitData Login", res);
          setSubmitData(res?.data?.success);
          console.log("res", res?.data?.success);
          navigate("/homescreen");
          //  dispatch(setLoggedInUser(res?.data));
        })
        .catch((err) => {
          console.log("submitData AXIOS ERROR", err);
        });
    } catch (error) {
      console.log("submitData CATCH ERROR", error);
    }
  };

  // const apiUrl = "https://api.example.com/login"; // Replace with your API URL

  // Define the login function

  return (
    <div className={`w-screen h-screen`}>
      <div className="container mx-auto">
        <div className="flex w-11/12 m-auto max-w-md h-screen justify-center items-center">
          <div className="h-max w-full bg-white shadow-md rounded-xl p-10">
            <p className="text-2xl mb-5 font-bold text-center">Log In</p>
            <form className=" mb-4">
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
                    setSubmitData({
                      // ...submitData,
                      // [e.target.email]: e.target.value,
                      ...submitData,
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
                    setSubmitData({
                      // ...submitData,
                      // [e.target.password]: e.target.value,
                      ...submitData,
                      password: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <Link
                    to="/"
                    class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-dark-purple"
                    // href="#"
                  >
                    Forgot Password?
                  </Link>
                </div>

                <button
                  className="bg-blue-500 hover:bg-dark-purple text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={(e) => submitHandler(e)}
                >
                  Sign In
                </button>

                {/* </Link> */}
              </div>
              <div>
                <Link to="register">New user please register</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
