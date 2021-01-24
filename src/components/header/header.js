import * as React from "react";
import "./header.scss";

const Header = () => {
  return (
    <header>
      <nav className="navbar fixed-top navbar-light bg-white shadow">
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
              <a className="navbar-brand" href="#home">
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
