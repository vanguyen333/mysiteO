import React from "react";
import "./header.css";
// import Blog from "../blog/Blog.jsx";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

// import { logoBlack } from "public/imgs/tulip.png";

const Header = () => {
  return (
    <Navbar expand="lg" variant="dark" className="headercl">
      <Container>
        <Navbar.Brand className="titlenav" href="#home">
          <img className="logome" src="public/imgs/v.jpg" />
          vanguyendev
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>

            <Nav.Link href="#contact">Contact</Nav.Link>

            <NavDropdown title="Courses" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">HTML</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">CSS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">JavaScript</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">React JS</NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Java</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
