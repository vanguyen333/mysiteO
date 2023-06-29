// import "../Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "postcss";

const Skills = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "10px",
        },
      },
    ],
  };
  return (
    <div className="lang h-120 text-center bg-gray-100">
      <h1 className=" h1ex skills font-bold font-sans sans-serif font-serif text-5xl text-[#434e58] pb-10">
        Technical Skills.
      </h1>

      <Slider {...settings}>
        <div>
          <img
            className="h-72 rounded-3xl border-none shadow-md "
            src="imgs/1.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-72 rounded-3xl border-none shadow-md"
            src="imgs/2.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-72 rounded-3xl border-none shadow-md"
            src="imgs/3.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-72 rounded-3xl border-none shadow-md"
            src="imgs/4.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-72 rounded-3xl border-none shadow-md"
            src="imgs/5.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-72 rounded-3xl border-none shadow-md"
            src="imgs/6.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-72 rounded-3xl border-none shadow-md"
            src="imgs/7.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-72 rounded-3xl border-none shadow-md"
            src="imgs/8.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-72 rounded-3xl border-none shadow-md"
            src="imgs/9.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-72 rounded-3xl border-none shadow-md"
            src="imgs/10.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-72 rounded-3xl border-none shadow-md"
            src="imgs/11.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-72 rounded-3xl border-none shadow-md"
            src="imgs/12.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-72 rounded-3xl border-none shadow-md"
            src="imgs/13.png"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default Skills;
