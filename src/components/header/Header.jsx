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
    <div className="headercl w-full h-96">
      <Navbar expand="lg" variant="dark">
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
                <NavDropdown.Item href="#action/3.3">
                  JavaScript
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">React JS</NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Java</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="homecl">
        <h1 className="Recoleta sans-serif font-serif text-center hover:system-ui text-[#d6f4f8] text-7xl ">
          Looking for a developer?
        </h1>
        <h2 className="text-xl text-[#ffffff] text-center py-5">
          I am a full stack developer. I develop applications, software and web
          applications.
        </h2>
        <img
          className="waterhd w-full"
          src="public/imgs/Water.png"
          alt="water"
        />
      </div>
    </div>
  );
};

export default Header;
