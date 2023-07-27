import Chapter1 from "../CitizenCompo/Chapter1";
import Chapter2 from "../CitizenCompo/Chapter2";
import Contents from "../CitizenCompo/Contents";
import Footer from "../components/Footer";

const CanadianCitizenship = () => {
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

      {/* <Footer /> */}
    </div>
  );
};

export default CanadianCitizenship;
