import React from "react";
import Home from "../pages/home/Home";
import BaseLayout from "../layouts/BaseLayout";
import About from "../pages/about/About";
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "../pages/login/Login";
import Error from "../pages/error/Error";

export default function StandardRoutes() {
  return (
    <>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path='/login' element={<Login/>}/>
            <Route path='*' element={<Error/>}/>
          </Routes>
    </>
  );
}
