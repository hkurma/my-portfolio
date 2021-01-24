import * as React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="bg-white p-2">
      <div className="container">
        Powered by{" "}
        <a href="http://gatsbyjs.com/" target="_blank" rel="noreferrer">
          Gatsby
        </a>
      </div>
    </footer>
  );
};

export default Footer;
