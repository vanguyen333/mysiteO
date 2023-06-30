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
            src="./imgs/github.svg"
            alt="github"
          />
        </a>
        <a href="https://www.linkedin.com/in/van-nguyen-2aa017224/">
          <img className="h-6 border-none" src="./imgs/linkedin.svg" />{" "}
        </a>
      </div>
    </div>
  );
};

export default Footer;
