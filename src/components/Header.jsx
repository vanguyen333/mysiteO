import ReactTyped from "react-typed";
const Header = ({ text, delay, infinite }) => {
  return (
    <div className="headercl w-full h-120">
      <div className="homecl pt-20">
        <h1 className=" h1headercl font-serif ui-serif font-semibold text-center hover:system-ui text-[#d6f4f8] text-6xl ">
          <ReactTyped
            strings={["Looking for a developer?"]}
            typeSpeed={100}
            loop
          />
        </h1>
        <h2 className="text-2xl text-[#ffffff] text-center py-5">
          I am a full stack developer. I develop applications, software and web
          applications.
        </h2>
        <img className="waterhd w-full " src="/imgs/Water.png" alt="water" />
      </div>
    </div>
  );
};

export default Header;
