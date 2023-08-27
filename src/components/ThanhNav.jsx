import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Courses from "../pages/Courses";
import About from "../pages/About";
import "./thanhnav.css";
import HTML from "../pages/Html";
import CanadianCitizenship from "../pages/CanadianCitizenship";
import Java from "../pages/Java";
import ReactJS from "../pages/ReactJS";
import CSS from "../pages/CSS";
import JavaScript from "../pages/JavaScript";

const ThanhNav = () => {
  return (
    <BrowserRouter>
      <Navbar
        className="headercl  px-24 md:mb-10"
        collapseOnSelect
        expand="xl"
        variant="dark"
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="/">
            <img className="logome " src="/imgs/v.jpg" alt="Logo" />
            vanguyendev
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto flex flex-end text-lg ">
              <Nav.Link as={NavLink} to="/" exact="true">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to="/blog">
                Blog
              </Nav.Link>

              {/* <NavDropdown title="Courses" id="collasible-nav-dropdown">
                <NavDropdown.Item as={NavLink} to="/courses/html">
                  HTML
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/courses/css">
                  CSS
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/courses/javascript">
                  JavaScript
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/courses/reactjs">
                  ReactJS
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/courses/java">
                  Java
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to="/courses/canadianCitizenship"
                >
                  CanadianCitizenship
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />

        <Route path="/courses/html" element={<HTML />} />

        <Route path="/courses/css" element={<CSS />} />
        <Route path="/courses/javascript" element={<JavaScript />} />
        <Route path="/courses/reactjs" element={<ReactJS />} />
        <Route path="/courses/java" element={<Java />} />
        <Route
          path="/courses/canadiancitizenship"
          element={<CanadianCitizenship />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default ThanhNav;
