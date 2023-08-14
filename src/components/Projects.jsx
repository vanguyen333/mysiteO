const Projects = () => {
  return (
    <div className="projects   md:h-auto  ">
      <h1 className=" h1ex text-center font-bold font-sans sans-serif font-serif text-5xl text-[#434e58] pb-10 text-center">
        Projects
      </h1>
      <p className="text-2xl pb-10 text-center">
        Following are some of my projects showcase my skills and experience. For
        more projects can be found at my
        <strong>
          <a href="https://github.com/vanguyen333/reactUltimate"> github </a>
        </strong>
        account.
      </p>
      <div className=" py-20 flex flex-col  md:h-auto md:flex-row justify-center items-center gap-10 px-10">
        <div className="img ">
          <img
            className="w-72 rounded-3xl border-none shadow-md"
            src="imgs/weather.png"
            alt="checking weather"
          />

          <p className="flex justify-center pt-7">
            React app using API key to check weather
          </p>
          <div className="flex justify-center">
            <button className=" bg-blue-500 text-white font-bold my-4 py-2 px-4 rounded-full">
              <a href="https://eclectic-cat-41d5da.netlify.app/">
                Open project
              </a>
            </button>
          </div>
        </div>
        <div className="img">
          <img
            className="w-72 rounded-3xl border-none shadow-md"
            src="imgs/tindog.png"
            alt="tindog"
          />
          <p className="flex justify-center pt-7">
            Responsive Tindog web using HTML, CSS
          </p>
          <div className="flex justify-center">
            <button className="bg-blue-500  text-white font-bold my-4  py-2 px-4 rounded-full">
              <a href="https://yummyapple123.github.io/tindog/">Open project</a>
            </button>
          </div>
        </div>
        <div className="img">
          <img
            className="w-72 rounded-3xl border-none shadow-md"
            src="imgs/randomquotes.png"
            alt="random quote "
          />
          <p className="flex justify-center pt-7">
            React app generate random quotes using API key
          </p>
          <div className="flex justify-center">
            <button className="bg-blue-500 text-white font-bold my-4  py-2 px-4 rounded-full">
              <a href="https://jocular-maamoul-1b0c23.netlify.app/">
                Open project
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
