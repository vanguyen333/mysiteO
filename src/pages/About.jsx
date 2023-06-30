import Footer from "../components/Footer";
import "./about.css";
const About = () => {
  return (
    <div className="about ">
      <div className="pt-20  flex flex-col md:flex-row justify-center items-center gap-10  px-10">
        <div className="box img md:h-auto ">
          <img
            className="shadow-2xl h-32 border-none h-32 md:h-auto"
            src="imgs/bird.jpg"
            alt="bird"
          />
        </div>
        <div className=" box img md:h-auto">
          <img
            className="shadow-2xl h-32 border-none rounded-3xl  md:h-auto"
            src="imgs/me.jpeg"
            alt="metuplip"
          />
        </div>
        <div className="box img md:h-auto">
          <img
            className="shadow-2xl h-32 border-none md:h-auto "
            src="imgs/bird.jpg"
            alt="bird"
          />
        </div>
      </div>
      <div className="content text-center sm:pl-32 sm:pr-32 lg:pl-52 lg:pr-52">
        <h1 className="h1headerabout font-serif ui-serif font-semibold text-center hover:system-ui text-4xl pt-10 pb-10">
          Hi there, it's Van.
        </h1>
        <p className="pb-10 ">
          Thank you for taking the time to visit my personal website. I am a
          full-stack developer based in Ottawa, Canada. <br />
          <br />
          As a recent graduate from Algonquin College with a specialization in
          Computer Programming, I possess a wide range of skills in building web
          applications, applications, software solutions and debugging. During
          my education, I was working as a co-op intern web developer at
          U+Education, an Education company, for a duration of four months. In
          this role, I played a pivotal part in designing, updating, and
          revamping the company's WordPress website, gaining valuable hands-on
          experience.
          <br />
          <br />
          Passionate about designing innovative technology products, I am
          constantly eager to learn and apply new skills and talents to drive
          your organization's success. With my dedication and expertise, I am
          confident in making a significant contribution to your team and
          helping your organization thrive.
          <br />
        </p>
      </div>
      <p className="pl-10 pt-10">
        Bird Image source:{" "}
        <a href="https://www.wallpaperflare.com/beautiful-girl-with-colorful-hair-desktop-wallpaper-hd-for-mobile-phones-and-laptops-wallpaper-bhxbt">
          wallpaperflare
        </a>
      </p>
      <Footer />
    </div>

    // <div className="about ">
    //   <div className="pt-20 flex justify-center gap-10 flex-row about">
    //     <img
    //       className="pt-10 border-none h-80"
    //       src="imgs/bird.jpg"
    //       alt="metuplip"
    //     />
    //     <img
    //       className="border-none rounded-3xl h-96"
    //       src="imgs/me.jpeg"
    //       alt="metuplip"
    //     />
    //     <img
    //       className="pt-10 border-none h-80"
    //       src="imgs/bird.jpg"
    //       alt="metuplip"
    //     />
    //   </div>
    //   <div className="content text-center pl-52 pr-52">
    //     <h1 className="h1headerabout font-serif ui-serif font-semibold text-center hover:system-ui  text-4xl  pt-10 pb-10">
    //       Hi there, it's Van.
    //     </h1>
    //     <p className="pb-10">
    //       Thank you for taking the time to visit my personal website. I am a
    //       full-stack developer based in Ottawa, Canada.
    //       <br />
    //       <br />
    //       As a recent graduate from Algonquin College with a specialization in
    //       Computer Programming, I possess a wide range of skills in building web
    //       applications, applications, and software solutions. During my
    //       education, I was working as a co-op intern web developer at
    //       U+Education, an Education company, for a duration of four months. In
    //       this role, I played a pivotal part in designing, updating, and
    //       revamping the company's WordPress website, gaining valuable hands-on
    //       experience.
    //       <br />
    //       <br /> Additionally, I have successfully managed my time as a Senior
    //       Women's Lead for the renowned Old Navy Brand, where I honed my
    //       customer service skills and led a team towards achieving sales goals.
    //       I thrive on embracing opportunities and challenges, as they contribute
    //       to my continuous growth in skills and knowledge.
    //       <br />
    //       <br />
    //       Passionate about designing innovative technology products, I am
    //       constantly eager to learn and apply new skills and talents to drive
    //       your organization's success. With my dedication and expertise, I am
    //       confident in making a significant contribution to your team and
    //       helping your organization thrive.
    //       <br />
    //       Once again, I appreciate your visit on my website.
    //     </p>
    //   </div>
    //   <p className="pl-10 pt-10">
    //     Bird Image source:{" "}
    //     <a href="https://www.wallpaperflare.com/beautiful-girl-with-colorful-hair-desktop-wallpaper-hd-for-mobile-phones-and-laptops-wallpaper-bhxbt">
    //       {" "}
    //       wallpaperflare
    //     </a>
    //   </p>
    //   <Footer />
    // </div>
  );
};

export default About;
