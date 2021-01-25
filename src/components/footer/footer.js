import * as React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="bg-white p-2">
      <div className="container">
        <span>
          Powered by{" "}
          <a href="http://gatsbyjs.com/" target="_blank" rel="noreferrer">
            Gatsby
          </a>
        </span>
        <span className="float-right">
          Icons made by{" "}
          <a href="https://www.freepik.com" title="Freepik">
            Freepik
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
