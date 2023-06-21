const Projects = () => {
  return (
    <div className="projects h-96 text-center">
      <h1 className=" h1ex text-center font-bold font-sans sans-serif font-serif text-5xl text-[#434e58] pb-10">
        Projects
      </h1>
      <p>
        Following are some of my projects showcase my skills and experience. For
        more projects can be found at my
        <strong>
          <a href="https://github.com/vanguyen333/reactUltimate"> github </a>
        </strong>
        account.
      </p>
      <div>
        <img
          className="w-72 rounded-3xl border-none shadow-md"
          src="imgs/weather.png"
          alt="checking weather"
        />
        <p>
          This is a web application for checking weather condition by entering
          nation or city name using React JS and API key.{" "}
        </p>
      </div>
      <div>
        <img
          className="w-72 rounded-3xl border-none shadow-md"
          src="imgs/tindog.png"
          alt="tindog"
        />
        <p>This is a website using HTML and CSS, the site is responsive.</p>
      </div>
      <div>
        <img
          className="w-72 rounded-3xl border-none shadow-md"
          src="imgs/randomquotes.png"
          alt="random quote generator"
        />
        <p>
          This is a web application to generate a random quote using API key and
          React JS.
        </p>
      </div>
    </div>
  );
};

export default Projects;
