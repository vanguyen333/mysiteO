import Chapter1 from "../CitizenCompo/Chapter1";
import Chapter2 from "../CitizenCompo/Chapter2";
import Contents from "../CitizenCompo/Contents";

const CanadianCitizenship = () => {
  const Footer = () => {
    return (
      <div className="footer h-40 pt-8 mt-0 text-center bg-indigo-200 ">
        <h1>
          @Copyright<strong> Van Nguyen </strong> - 2023
        </h1>
        <p className="pt-2">
          Site technologies: - ReactJS, Tailwindcss, Vite, BootStrap
        </p>
        <div className="logos flex gap-10 justify-center pt-6">
          <a href="https://github.com/vanguyen333">
            <img
              className="h-6 border-none object-center"
              src="../imgs/github.svg"
              alt="github"
            />
          </a>
          <a href="https://www.linkedin.com/in/van-nguyen-2aa017224/">
            <img className="h-6 border-none" src="../imgs/linkedin.svg" />
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="">
      <div className="header flex flex-row items-center justify-center gap-10 text-center pt-20 pb-10">
        <img
          className="h-28"
          src="../public/imgs/maple.png"
          alt="maple_leave"
        />
        <h1 className="text-5xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-700">
          Let's prepare for Canadian Citizenship!
        </h1>
        <img
          className="h-28"
          src="../public/imgs/maple.png"
          alt="maple_leave"
        />
      </div>
      <Contents />
      <Chapter1 />
      <Chapter2 />
      {/* <Paginationn /> */}
      <Footer />
    </div>
  );
};

export default CanadianCitizenship;
