import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/home/Home";
import BaseLayout from "../layouts/BaseLayout";
import About from "../pages/about/About";

export default function StandardRoutes() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}
