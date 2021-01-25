import React, { useEffect } from "react";
import "./header.scss";

const Header = () => {
  useEffect(() => {
    const headerEl = document.getElementById("header");
    headerEl.style.top = "-" + headerEl.offsetHeight + "px";
    window.addEventListener("scroll", () => {
      if (window.pageYOffset < (window.innerHeight/2)) {
        headerEl.style.top = "-" + headerEl.offsetHeight + "px";
      } else {
        headerEl.style.top = "0";
      }
    });
  }, []);

  return (
    <header>
      <nav id="header" className="navbar navbar-light bg-white shadow">
        <div className="container">
          <ul className="navbar-nav">
            <li className="nav-item d-none d-md-block">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item d-none d-md-block">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="navbar-brand bg-dark" href="#home">
                HK
              </a>
            </li>
            <li className="nav-item d-none d-md-block">
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item d-none d-md-block">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
