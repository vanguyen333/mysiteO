import ReactTyped from "react-typed";

const Header = ({ text, delay, infinite }) => {
  return (
    <div className="headercl w-full ">
      <div className="homecl pt-10 md:pt-20 ">
        <h1 className="h1headercl font-serif ui-serif font-semibold text-center hover:system-ui text-[#d6f4f8] text-4xl md:text-6xl pb-10 ">
          From idea to implementation.
        </h1>
        <h2 className="text-xl md:text-2xl text-[#ffffff] text-center py-10 md:py-5">
          <ReactTyped
            strings={[
              "Computer Programming student looking for an opportunity!",
            ]}
            typeSpeed={50}
            loop
          />
        </h2>
        <div className="relative">
          <img className="waterhd w-full " src="/imgs/Water.png" alt="water" />
        </div>
      </div>
    </div>
  );
};

export default Header;
