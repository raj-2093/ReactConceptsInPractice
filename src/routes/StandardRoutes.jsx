import React from "react";
import Home from "../pages/home/Home";
import BaseLayout from "../layouts/BaseLayout";
import About from "../pages/about/About";
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "../pages/login/Login";
import Error from "../pages/error/Error";
import ConceptUseState from "../pages/concepts/ConceptUseState";
import ConceptUseReducer from "../pages/concepts/ConceptUseReducer";
import ConceptUseEffect from "../pages/concepts/ConceptUseEffect";
import ConceptUseRef from "../pages/concepts/ConceptUseRef";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/login", element: <Login /> },
  { path: "/Concept-use-state", element: <ConceptUseState /> },
  { path: "/Concept-use-reducer", element: <ConceptUseReducer /> },
  { path: "/Concept-use-ref", element: <ConceptUseRef /> },
  { path: "/Concept-use-effect-hook", element: <ConceptUseEffect /> },
  { path: "*", element: <Error /> },
];

export default function StandardRoutes() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/Concept-use-state" element={<ConceptUseState />} />
        <Route path="/Concept-use-reducer" element={<ConceptUseReducer />} />
        <Route path="/Concept-use-effect-hook" element={<ConceptUseEffect />} />
        <Route path="*" element={<Error />} />
      </Routes> */}
      <Routes>
        {routes.map((route) => {
          return <Route path={route.path} element={route.element}></Route>;
        })}
      </Routes>
    </>
  );
}
