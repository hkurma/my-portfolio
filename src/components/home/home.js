import * as React from "react";
import "./home.scss";
import Typist from "react-typist";

const Home = () => {
  return (
    <div id="home">
      <div className="content">
        <div className="wrapper">
          <h1 className="display-4">I'm Harish Kurma</h1>
          <h3>
            <Typist avgTypingDelay={100}>
              Software Engineer by profession and passion.
            </Typist>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
