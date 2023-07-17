import "./blog.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <h1 className="text-5xl text-left pl-10 pt-10  font-bold">
        #1 Angela Yu: Empowering Women in Coding and Technology
      </h1>
      <img className="border-none pl-10 pt-10" src="imgs/AngelaYu.jpg" alt="" />
      <div className="text-left pt-10 pl-10 pb-10 pr-96">
        <p>
          Started learning to code at the age of 12. Didn't like the way Space
          Invaders game was, her dad told her to change it and started to teach
          her how to code. she was hooked on programming since then through
          building a project with her dad.
          <br />
          As on her twitter saying: "I'm not a female coder, I'm a coder who
          happens to be female."
          <br />
          Getting over the barrier of negative thinkings towards her of being
          Asian and a women, she instead focuses on things that she can change
          to build up her career. Her hard work and dedication have paid off. As
          now she is a renowned role modle for many young girls and women to
          look up to.
          <br />
          Whenever mentioning Udemy, her name and courses are always on the
          recommended list about web development, Python, iOS App Development,
          and so on. Her coding programs have helped numerous of people land a
          dream job
        </p>
        <h1 className="text-5xl text-left pl-10 pt-10  font-bold">
          #2 Exploring Web 3.0: The Future of Online Technology
        </h1>
        <p>
          <br />
          <strong> What exactly is Web 2.0 ? </strong>
          <br />
          The websites we are using basically are the Web 2.0, it refers to the
          21st-century Internet applications that have transformed the digital
          era in the aftermath of the dotcom bubble. The term Web 2.0 first came
          into use in 1999 as the Internet pivoted toward a system that actively
          engaged the user. Users were encouraged to provide content, rather
          than just viewing it. The social aspect of the Internet has been
          particularly transformed; in general, social media allows users to
          engage and interact with one another by sharing thoughts,
          perspectives, and opinions. Users can tag, share, tweet, and like.[1]
          <br /> <br />
          <strong> What is Web 3.0 ?</strong>
        </p>
        <p>
          <br />
          <br />
          References [1]what is web 2.0 : link:
          https://www.investopedia.com/terms/w/web-20.asp
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
