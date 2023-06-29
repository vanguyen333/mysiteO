import { Container } from "react-bootstrap";
import { useState } from "react";
import React from "react";
import "./Home.css";
import Education from "../components/Education";
// import slides from "./mock.json";

import Header from "../components/Header";

import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Skills from "../components/Skills";

// import React from "react";
// import <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@700&family=Quicksand&display=swap" rel="stylesheet"></link>

//  https://www.youtube.com/watch?v=TWz4TjSssbg
const Home = () => {
  return (
    <div className="homecl">
      <Header />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
