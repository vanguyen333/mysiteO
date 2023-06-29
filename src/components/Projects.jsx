import "./project.css";
const Projects = () => {
  return (
    <div className="projects  h-96 md:h-auto  ">
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
      <div className="hinh py-20 flex flex-col md:flex-row justify-center items-center gap-10  px-10">
        <div className="img ">
          <img
            className="w-72 rounded-3xl border-none shadow-md"
            src="imgs/weather.png"
            alt="checking weather"
          />
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
          <div className="flex justify-center">
            <button className="bg-blue-500 text-white font-bold my-4  py-2 px-4 rounded-full">
              <a href="https://jocular-maamoul-1b0c23.netlify.app/">
                Open project
              </a>
            </button>
          </div>
        </div>
      </div>

      {/* <table className="">
        <tr>
          <td className="">
            <img
              className="w-72 rounded-3xl border-none shadow-md"
              src="imgs/weather.png"
              alt="checking weather"
            />
          </td>
          <td>
            <img
              className="w-72 rounded-3xl border-none shadow-md"
              src="imgs/tindog.png"
              alt="tindog"
            />
          </td>
          <td>
            <img
              className="w-72 rounded-3xl border-none shadow-md"
              src="imgs/randomquotes.png"
              alt="random quote generator"
            />
          </td>
        </tr>
        <tr>
          <td>
            <p>
              This is a web application for checking
              <br /> weather condition by entering nation
              <br /> or city name using React JS and API key.{" "}
            </p>
          </td>
          <td>
            <p>
              This is a website using HTML and CSS,
              <br /> the site is responsive.
            </p>
          </td>
          <td>
            {" "}
            <p>
              This is a web application to generate a<br /> random quote using
              API key and React JS.
            </p>
          </td>
        </tr>
        <tr>
          <td className="pb-9">
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full">
              <a href="https://eclectic-cat-41d5da.netlify.app/">
                Open project
              </a>
            </button>
          </td>
          <td className="pb-9">
            <button className="bg-blue-500  text-white font-bold py-2 px-4 rounded-full">
              <a href="https://yummyapple123.github.io/tindog/">Open project</a>
            </button>
          </td>
          <td className="pb-9">
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full">
              <a href="https://jocular-maamoul-1b0c23.netlify.app/">
                Open project
              </a>
            </button>
          </td>
        </tr>
      </table> */}
    </div>
  );
};

export default Projects;
