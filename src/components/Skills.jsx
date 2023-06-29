import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Skills = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="carousel h-120 text-center bg-purple-200 px-24 py-24 mb-10 ">
      <h1 className="h1ex skills font-bold font-sans sans-serif font-serif text-5xl  pb-10">
        Skills
      </h1>
      <Slider {...settings}>
        <div className="box px-3.5">
          <img
            className="rounded-3xl border-none shadow-md"
            src="imgs/1.png"
            alt=""
          />
        </div>

        <div className="box px-3.5">
          <img
            className="rounded-3xl border-none shadow-md"
            src="imgs/2.png"
            alt=""
          />
        </div>

        <div className="box px-3.5">
          <img
            className="rounded-3xl border-none shadow-md"
            src="imgs/3.png"
            alt=""
          />
        </div>

        <div className="box px-3.5">
          <img
            className="rounded-3xl border-none shadow-md"
            src="imgs/4.png"
            alt=""
          />
        </div>

        <div className="box px-3.5">
          <img
            className="rounded-3xl border-none shadow-md"
            src="imgs/5.png"
            alt=""
          />
        </div>

        <div className="box px-3.5">
          <img
            className="rounded-3xl border-none shadow-md"
            src="imgs/6.png"
            alt=""
          />
        </div>

        <div className="box px-3.5">
          <img
            className="rounded-3xl border-none shadow-md"
            src="imgs/7.png"
            alt=""
          />
        </div>

        <div className="box px-3.5">
          <img
            className="rounded-3xl border-none shadow-md"
            src="imgs/8.png"
            alt=""
          />
        </div>

        <div className="box px-3.5">
          <img
            className="rounded-3xl border-none shadow-md"
            src="imgs/9.png"
            alt=""
          />
        </div>

        <div className="box px-3.5">
          <img
            className="rounded-3xl border-none shadow-md"
            src="imgs/10.png"
            alt=""
          />
        </div>

        <div className="box px-3.5">
          <img
            className="rounded-3xl border-none shadow-md"
            src="imgs/11.png"
            alt=""
          />
        </div>

        <div className="box px-3.5">
          <img
            className="rounded-3xl border-none shadow-md"
            src="imgs/12.png"
            alt=""
          />
        </div>

        <div className="box px-3.5">
          <img
            className="rounded-3xl border-none shadow-md"
            src="imgs/13.png"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default Skills;
