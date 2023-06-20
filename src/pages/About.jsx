import "./about.css";
const About = () => {
  return (
    <div>
      <div className="pt-20 flex justify-center gap-10 flex-row about">
        <img
          className="pt-10 border-none h-80"
          src="imgs/bird.jpg"
          alt="metuplip"
        />
        <img
          className="border-none rounded-3xl h-96"
          src="imgs/me.jpeg"
          alt="metuplip"
        />
        <img
          className="pt-10 border-none h-80"
          src="imgs/bird.jpg"
          alt="metuplip"
        />
      </div>
      <div className="content text-center pl-52 pr-52">
        <h1 className="h1headercl font-serif ui-serif font-semibold text-center hover:system-ui  text-4xl  pt-10 pb-10">
          Hi there, it's Van.
        </h1>
        <p className="pb-10">
          Thank you for taking the time to visit my personal website. I am
          delighted to introduce myself as a confident and accomplished
          full-stack developer based in Ottawa, Canada.
          <br />
          <br />
          As a recent graduate from Algonquin College with a specialization in
          Computer Programming, I possess a wide range of skills in building web
          applications, applications, and software solutions. During my
          education, I had the privilege of working as a co-op intern web
          developer at U+Education, an Education company, for a duration of four
          months. In this role, I played a pivotal part in designing, updating,
          and revamping the company's WordPress website, gaining valuable
          hands-on experience.
          <br />
          <br /> Additionally, I have successfully managed my time as a Senior
          Women's Lead for the renowned Old Navy Brand, where I honed my
          customer service skills and led a team towards achieving sales goals.
          I thrive on embracing opportunities and challenges, as they contribute
          to my continuous growth in skills and knowledge.
          <br />
          <br />
          Passionate about designing innovative technology products, I am
          constantly eager to learn and apply new skills and talents to drive
          your organization's success. With my dedication and expertise, I am
          confident in making a significant contribution to your team and
          helping your organization thrive.
          <br />
          Once again, I appreciate your visit on my website.
        </p>
      </div>
    </div>
  );
};

export default About;
