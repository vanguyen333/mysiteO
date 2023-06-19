import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import ThanhNav from "./components/ThanhNav";
// import { Header, Home, Blog } from "../pages";
const App = () => {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <div>Hello world!</div>,
  //   },
  // ]);
  return (
    <div>
      <ThanhNav />
    </div>
  );
};

export default App;
