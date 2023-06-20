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
      <div className="content">
        <h1>Hi, it's Van again.</h1>
      </div>
    </div>
  );
};

export default About;
