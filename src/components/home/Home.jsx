import { Container } from "react-bootstrap";
import "./Home.css";
// import React from "react";
// import <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@700&family=Quicksand&display=swap" rel="stylesheet"></link>

const Home = () => {
  return (
    <div className="homecl">
      {/* Introduction */}
      <div className="intro w-full h-96">
        <h1 className=" right homeh1 font-sans sans-serif font-serif hover:system-ui text-[#434e58] text-5xl ">
          Introduction
        </h1>
        <p>
          I am a passionate developer. I recently graduated from Algonquin
          College majoring in Computer Programming. I build web applications
          like JavaScript, ReactJS, softwares or Android Apps using Java. I love
          coding to create user-friendly applications.
        </p>
      </div>
      {/* education */}
      <div className="education h-96">
        <table>
          <tr>
            <th>
              <img className="cap" src="public/imgs/graduation.png"></img>
            </th>
            <th>
              <h1 className=" right homeh1 font-sans sans-serif font-serif hover:system-ui text-[#434e58] text-5xl ">
                Education
              </h1>
            </th>
          </tr>
          <tr>
            <td></td>
            <td className="right">
              <h2 className=" h2cl text-xl text-[#4c9da8]">
                Sept 2021 – May 2023
              </h2>
              <h2>
                Algonquin College, Ottawa, Ontario, Canada -
                <b> Computer Programming</b>
              </h2>
            </td>
          </tr>
          <tr>
            <td></td>
            <td className="right">
              <h2 className=" h2cl text-xl text-[#4c9da8]">
                Sept 2009 – Sept 2012
              </h2>
              <h2>
                Hung Vuong University, Ho Chi Minh City, Viet Nam -
                <b> English Language</b>
              </h2>
            </td>
          </tr>
        </table>
      </div>
    </div>

    // <Container className="homecl">
    //   <div className="jumbotron">
    //     <h1 className="display-4">Hi, I'm Van.</h1>
    //     <p className="lead">
    //       I develop web applications, softwares and applications.
    //     </p>
    //     <hr className="my-4" />
    //     <p>
    //       It uses utility classes for typography and spacing to space content
    //       out within the larger container.
    //     </p>
    //     <a className="btn btn-primary btn-lg" href="#" role="button">
    //       Learn more
    //     </a>
    //   </div>
    // </Container>
  );
};

export default Home;
