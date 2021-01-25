import * as React from "react";
import "./home.scss";
import Typist from "react-typist";

const Home = () => {
  const [navStyle, setNavStyle] = React.useState({ opacity: 0 });

  const onTypingDone = () => {
    setNavStyle({ opacity: 1 });
  };

  return (
    <div id="home" className="content">
      <div className="wrapper text-center">
        <img src="/images/waving-hand.svg" height="80" alt="Hi" className="mb-3"></img>
        <h1 className="display-4">I'm Harish Kurma</h1>
        <h3 className="mb-5">
          <Typist avgTypingDelay={100} onTypingDone={onTypingDone}>
            Software Engineer by profession and passion.
          </Typist>
        </h3>
        <div className="container nav-boxes" style={navStyle}>
          <div className="row">
            <div className="col-lg-3">
              <a className="box" href="#about">About</a>
            </div>
            <div className="col-lg-3">
              <a className="box" href="#projects">Projects</a>
            </div>
            <div className="col-lg-3">
              <a className="box" href="#skills">Skills</a>
            </div>
            <div className="col-lg-3">
              <a className="box" href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
