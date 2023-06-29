import { Container } from "react-bootstrap";
import { useState } from "react";
import React from "react";
import "./Home.css";
import Education from "../components/Education";
// import slides from "./mock.json";

import Header from "../components/Header";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Sliding from "../components/Sliding";

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
      {/* <Skills /> */}
      <Sliding />
      <Projects />
      <Contact />
      <Footer />

      {/* Experience */}
      {/* <div className="experience  h-120 ">
        <h1 className=" h1ex text-center font-bold font-sans sans-serif font-serif text-5xl text-[#434e58] pb-10">
          Work Experience
        </h1>
        <h2 className="text-2xl">Related Work Experience</h2>
        <p>Web Developer - U+Education</p>
        <h2 className="text-2xl">Non-Related Work Experience</h2>
      </div> */}
    </div>
  );
};

export default Home;
