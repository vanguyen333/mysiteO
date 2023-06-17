import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";

import Navbar from "./components/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Header, Home, Blog } from "../pages";
const App = () => {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <div>Hello world!</div>,
  //   },
  // ]);
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>Content</h1>
      </div>
    </div>
  );
};

export default App;
