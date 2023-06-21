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

      <img
        className="h-72 rounded-3xl border-none shadow-md"
        src="imgs/weather.png"
        alt=""
      />
      <img
        className="h-72 rounded-3xl border-none shadow-md"
        src="imgs/tindog.png"
        alt=""
      />
      <img
        className="h-72 rounded-3xl border-none shadow-md"
        src="imgs/randomquotes.png"
        alt=""
      />
    </div>
  );
};

export default Projects;
