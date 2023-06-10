import { Container } from "react-bootstrap";
import { useState } from "react";
import React from "react";
import "./Home.css";
// import React from "react";
// import <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@700&family=Quicksand&display=swap" rel="stylesheet"></link>

const Home = () => {
  return (
    <div className="homecl">
      {/* Introduction
      <div className="intro w-full h-96">
        <h1 className=" right homeh1 font-sans sans-serif font-serif hover:system-ui text-[#434e58] text-5xl ">
          Introduction
        </h1>
        <p>
          I am a passionate developer. I recently graduated from Algonquin
          College majoring in Computer Programming. I build web applications
          like JavaScript, ReactJS, softwares or Android Apps using Java. I love
          coding to create user-friendly applications.
        </p>
      </div> */}
      {/* education */}
      <div className="education h-96">
        <table>
          <tr>
            <th>
              <img className="cap" src="public/imgs/graduation.png"></img>
            </th>
            <th>
              <h1 className=" right homeh1 font-sans sans-serif font-serif hover:system-ui text-[#434e58] text-5xl ">
                Education
              </h1>
            </th>
          </tr>
          <tr>
            <td></td>
            <td className="right">
              <h2 className=" h2cl text-xl text-[#4c9da8]">
                Sept 2021 – May 2023
              </h2>
              <h2>
                Algonquin College, Ottawa, Ontario, Canada -
                <b> Computer Programming</b>
              </h2>
            </td>
          </tr>
          <tr>
            <td></td>
            <td className="right">
              <h2 className=" h2cl text-xl text-[#4c9da8]">
                Sept 2009 – Sept 2012
              </h2>
              <h2>
                Hung Vuong University, Ho Chi Minh City, Viet Nam -
                <b> English Language</b>
              </h2>
            </td>
          </tr>
        </table>
      </div>
      {/* Coding languages */}
      <div className=" container languages">
        <h1 className="text-center text-5xl  text-[#434e58] w-full">Skills</h1>
        <div className="carousel">
          <img src="/imgs/1.png" alt="react" className="h-80" />
          <img src="/imgs/2.png" alt="react" className="h-80" />
          <img src="/imgs/3.png" alt="react" className="h-80" />
          <img src="/imgs/4.png" alt="react" className="h-80" />
          <img src="/imgs/5.png" alt="react" className="h-80" />
          <img src="/imgs/6.png" alt="react" className="h-80" />
          <img src="/imgs/7.png" alt="react" className="h-80" />
          <img src="/imgs/8.png" alt="react" className="h-80" />
          <img src="/imgs/9.png" alt="react" className="h-80" />
          <img src="/imgs/10.png" alt="react" className="h-80" />
        </div>
      </div>
      {/* Projects */}
      <div className="projects text-center">
        <h1>Projects</h1>
        <p>Lorem ipsum</p>
      </div>
    </div>
  );
};

export default Home;
