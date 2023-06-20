// import Header from "./components/Header";
// import Home from "./pages/Home";
// import Blog from "./pages/Blog";
// import Courses from "./pages/Courses";
// import Contact from "./pages/Contact";

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Courses from "../pages/Courses";
import About from "../pages/About";
import "./thanhnav.css";
const ThanhNav = () => {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <img className="logome" src="public/imgs/v.jpg" />
          <h1>vanguyendev</h1>
          <Link to="/">Home</Link>
          <NavLink to="about">About</NavLink>
          <NavLink to="blog">Blog</NavLink>
          <NavLink to="courses">Courses</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="courses" element={<Courses />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default ThanhNav;
