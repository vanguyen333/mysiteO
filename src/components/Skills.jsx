// import "../Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Skills = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="lang h-120 text-center">
      <h1 className=" h1ex skills font-bold font-sans sans-serif font-serif text-5xl text-[#434e58] pb-10">
        Technical Skills.
      </h1>
      <Slider {...settings}>
        <div>
          <img
            className="h-72 rounded-3xl border-none shadow-md"
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
