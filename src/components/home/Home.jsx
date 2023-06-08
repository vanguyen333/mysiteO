import { Container } from "react-bootstrap";
import "./Home.css";
// import React from "react";
// import <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@700&family=Quicksand&display=swap" rel="stylesheet"></link>

const Home = () => {
  return (
    <Container>
      <div className="homecl">
        <table>
          <tr>
            <th>
              <img
                src="public/imgs/appleDesktop.jpg"
                className="lady"
                alt="laptp-lady"
              />
            </th>
            <th>
              <h1>Hi, I'm Van.</h1>
              <h2>
                I am a full stack developer. I develop applications, software
                and web applications.
              </h2>
            </th>
          </tr>
        </table>
      </div>
    </Container>

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
