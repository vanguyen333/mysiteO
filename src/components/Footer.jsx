const Footer = () => {
  return (
    <div className="footer h-32 pt-10 mt-32 text-center bg-indigo-200">
      <h1>
        @Created by<strong> Van Nguyen </strong> - 2023
      </h1>
      <a href="https://github.com/vanguyen333">
        {" "}
        <img
          className="h-6 border-none object-center"
          src="./imgs/github.svg"
          alt="github"
        />
      </a>
      <a href="https://www.linkedin.com/in/van-nguyen-2aa017224/">
        {" "}
        <img className="h-6 border-none" src="./imgs/linkedin.svg" />{" "}
      </a>
    </div>
  );
};

export default Footer;
