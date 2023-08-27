import ReactTyped from "react-typed"; //npm install react-typed --force
const Header = ({ text, delay, infinite }) => {
  return (
    <div className="headercl w-full h-120">
      <div className="homecl pt-20">
        <h1 className=" h1headercl font-serif ui-serif font-semibold text-center hover:system-ui text-[#d6f4f8] text-6xl ">
          Where innovation meets implementation.{" "}
        </h1>
        <h2 className="text-2xl text-[#ffffff] text-center py-5">
          <ReactTyped
            strings={[`Full Stack, Full Potential.`]}
            typeSpeed={50}
            loop
          />
        </h2>
        <img className="waterhd w-full " src="/imgs/Water.png" alt="water" />
      </div>
    </div>
  );
};

export default Header;
