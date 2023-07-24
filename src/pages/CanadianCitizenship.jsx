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
      <div className="text-xl pl-24 pb-10">
        1. Applying for Citizenship
        <br />
        2. Rights and Responsibilities of Citizenship
        <br />
        3. Who we are <br />
        4. Canada's History <br />
        5. How Canadian's Govern Themselves <br />
        6.Federal Elections <br />
        7. The Justice System <br />
        8. Canadian Symbols <br />
        9. Canada's Economy <br />
        10. Canada's Regions <br />
        <div className="inner pl-28 ">
          The Atlantic Provinces <br />
          Central Canada <br />
          The Prairie Provinces <br />
          The West Coast <br />
          The Nothern Territories <br />
        </div>
      </div>
    </div>
  );
};

export default CanadianCitizenship;
