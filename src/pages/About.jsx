import Footer from "../components/Footer";
import MotionImages from "../components/MotionImage";
import "./about.css";
import React from "react";
import { useSpring, animated } from "react-spring";
const About = () => {
  const styles = useSpring({
    from: { opacity: 0, transform: "scale(0.8)" },
    to: { opacity: 1, transform: "scale(1)" },
  });
  return (
    <div className="about ">
      <div className="pt-32  flex flex-col md:flex-row justify-center items-center gap-10   px-10">
        <div className="box img md:h-auto ">
          <animated.img
            className="shadow-2xl h-32 border-none h-32 md:h-auto"
            src="imgs/bird.jpg"
            alt="bird"
            style={styles}
          />
        </div>
        <div className=" box img md:h-auto">
          <animated.img
            className="shadow-2xl h-24 border-none rounded-3xl  md:h-auto"
            src="imgs/downtown.jpeg"
            alt="metuplip"
            style={styles}
          />
        </div>
        <div className="box img md:h-auto">
          <animated.img
            className="shadow-2xl h-32 border-none md:h-auto "
            src="imgs/bird.jpg"
            alt="bird"
            style={styles}
          />
        </div>
      </div>
      <div className="content text-center">
        <h1 className="  h1headerabout font-serif ui-serif font-semibold text-center  text-4xl pt-10 pb-10">
          Hi there, it's Van.
        </h1>

        <div className="lg:w-3/4 mx-auto px-4 py-6 sm:px-4 text-center ">
          <p>
            Thank you for taking the time to visit my personal website.
            <br />I am a full-stack developer, a free-lancer, and content
            creator based in Ottawa, Canada. <br />
            <br />
            Recently graduated from Algonquin College with a specialization in
            Computer Programming, I possess a wide range of skills in building
            web applications, applications, software solutions and debugging. I
            have a strong desire to acquire knowledge about new technologies,
            and this website serves as a prime example, especially since ReactJS
            was not covered in my college curriculum.
            <br />
            <br />
            Passionate about designing innovative technology products and with
            my dedication and expertise, I am confident in making a significant
            contribution to your team and helping your organization thrive.
            <br />
          </p>
        </div>
        <p className="pl-10 pt-10 pb-10">
          Bird Image source:
          <a href="https://www.wallpaperflare.com/beautiful-girl-with-colorful-hair-desktop-wallpaper-hd-for-mobile-phones-and-laptops-wallpaper-bhxbt">
            <u> wallpaperflare</u>
          </a>
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default About;
