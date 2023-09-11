import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import About from "../src/Pages/About";
import "./public.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import App from "./App";
import SignupPage from "./Pages/SignUpPage";
import ContactUs from "./Components/ContactUs/ContactUs";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/SignupPage" element={<SignupPage />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </>
);
