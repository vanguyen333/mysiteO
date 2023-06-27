import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Courses from "../pages/Courses";
import About from "../pages/About";
import "./thanhnav.css";
const ThanhNav = () => {
  return (
    <BrowserRouter>
      <Navbar className="headercl" collapseOnSelect expand="xl" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img className="logome " src="/imgs/v.jpg" alt="Logo" />
            vanguyendev
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto flex flex-end text-lg ">
              <Nav.Link as={NavLink} to="/" exact>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to="/blog">
                Blog
              </Nav.Link>
              <Nav.Link as={NavLink} to="/courses">
                Courses
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </BrowserRouter>

    // <BrowserRouter>
    //   <header>
    //     <nav>
    //       <img className="logome" src="public/imgs/v.jpg" />
    //       <h1>vanguyendev</h1>
    //       <Link to="/">Home</Link>
    //       <NavLink to="about">About</NavLink>
    //       <NavLink to="blog">Blog</NavLink>
    //       <NavLink to="courses">Courses</NavLink>
    //     </nav>
    //   </header>
    //   <main>
    //     <Routes>
    //       <Route index element={<Home />} />
    //       <Route path="about" element={<About />} />
    //       <Route path="blog" element={<Blog />} />
    //       <Route path="courses" element={<Courses />} />
    //     </Routes>
    //   </main>
    // </BrowserRouter>
  );
};

export default ThanhNav;
