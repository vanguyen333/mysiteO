import { Container } from "react-bootstrap";
import { useState } from "react";
import React from "react";
import "./Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import React from "react";
// import <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@700&family=Quicksand&display=swap" rel="stylesheet"></link>

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="homecl">
      {/* education */}
      <div className="education  h-120 text-center object-center">
        <h1 className=" h1ex font-bold homeh1 font-sans sans-serif font-serif hover:system-ui  text-5xl  text-[#434e58] ">
          <img
            className="pr-3 cap object-scale-down h-24 border-none"
            src="public/imgs/graduation.png"
          />
          Education
        </h1>

        <h2 className=" h2cl text-3xl text-[#4c9da8]">
          <strong> Sept 2021 – April 2023</strong>
        </h2>
        <h2
          className="text-2xl
              "
        >
          Algonquin College, Ottawa, Ontario, Canada -
          <b> Computer Programming</b>
        </h2>
        <h2 className=" h2cl text-3xl text-[#4c9da8]">
          <strong>Sept 2009 – Sept 2012</strong>
        </h2>
        <h2 className="text-2xl">
          Hung Vuong University, Ho Chi Minh City, Viet Nam -
          <b> English Language</b>
        </h2>
      </div>
      {/* Coding languages */}
      <div className="lang h-120 text-center">
        <h1 className=" h1ex skills font-bold font-sans sans-serif font-serif text-5xl text-[#434e58] pb-10">
          Skills
        </h1>
        <Slider {...settings}>
          <div>
            <img className="h-80" src="imgs/1.png" alt="" />
          </div>
          <div>
            <img className="h-80" src="imgs/2.png" alt="" />
          </div>
          <div>
            <img className="h-80" src="imgs/3.png" alt="" />
          </div>
          <div>
            <img className="h-80" src="imgs/4.png" alt="" />
          </div>
          <div>
            <img className="h-80" src="imgs/5.png" alt="" />
          </div>
          <div>
            <img className="h-80" src="imgs/6.png" alt="" />
          </div>
          <div>
            <img className="h-80" src="imgs/7.png" alt="" />
          </div>
          <div>
            <img className="h-80" src="imgs/8.png" alt="" />
          </div>
          <div>
            <img className="h-80" src="imgs/9.png" alt="" />
          </div>
          <div>
            <img className="h-80" src="imgs/10.png" alt="" />
          </div>
          <div>
            <img className="h-80" src="imgs/11.png" alt="" />
          </div>
        </Slider>
      </div>
      {/* Experience */}
      {/* <div className="experience  h-120 ">
        <h1 className=" h1ex text-center font-bold font-sans sans-serif font-serif text-5xl text-[#434e58] pb-10">
          Work Experience
        </h1>
        <h2 className="text-2xl">Related Work Experience</h2>
        <p>Web Developer - U+Education</p>
        <h2 className="text-2xl">Non-Related Work Experience</h2>
      </div> */}

      {/* Projects */}
      <div className="projects text-center">
        <h1 className=" h1ex text-center font-bold font-sans sans-serif font-serif text-5xl text-[#434e58] pb-10">
          Projects
        </h1>
        <p>Lorem ipsum</p>
      </div>
    </div>
  );
};

export default Home;
