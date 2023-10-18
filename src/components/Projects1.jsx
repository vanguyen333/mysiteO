const Skills1 = () => {
  return (
    <div>
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
      <section className="px-20 mt-16 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 sm:gap-4 gap-14 justify-evenly items-center max-container max-lg:ml-l">
        <div className="w-72 xs:w-full rounded-3xl border-none  ">
          <img
            className="rounded-3xl"
            src="imgs/weather.png"
            alt="checking weather"
          />

          <p className="pt-7  leading-normal text-slate-gray">
            React app using API key to check weather
          </p>
          <button className=" bg-blue-500 text-white font-bold my-4 py-2 px-4 rounded-full">
            <a href="https://eclectic-cat-41d5da.netlify.app/">Open project</a>{" "}
          </button>
        </div>
        <div className="w-72 xs:w-full rounded-3xl border-none  md:mx-2">
          {" "}
          <img className="rounded-3xl" src="imgs/tindog.png" alt="tindog" />
          <p className=" pt-7 leading-normal text-slate-gray">
            Responsive Tindog web using HTML, CSS
          </p>
          <button className="bg-blue-500  text-white font-bold my-4  py-2 px-4 rounded-full">
            <a href="https://yummyapple123.github.io/tindog/">Open project</a>
          </button>
        </div>
        <div className="w-72 xs:w-full rounded-3xl border-none  md:mx-2">
          <img
            className="rounded-3xl"
            src="imgs/randomquotes.png"
            alt="random quote "
          />
          <p className="pt-7 leading-normal text-slate-gray">
            React app generate random quotes using API key
          </p>{" "}
          <button className="bg-blue-500 text-white font-bold my-4  py-2 px-4 rounded-full">
            <a href="https://jocular-maamoul-1b0c23.netlify.app/">
              Open project
            </a>
          </button>
        </div>
        <div></div>
      </section>
    </div>
  );
};

export default Skills1;
