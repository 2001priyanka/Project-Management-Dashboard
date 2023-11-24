// import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import HomeScreen from "./screens/HomeScreen";
import Register from "./Screens/Register";
import Login from "./Screens/Login";
import HomeScreen from "./Screens/HomeScreen";
// import Register from "./screens/Register";
// import Login from "./screens/Login";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/homescreen" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
