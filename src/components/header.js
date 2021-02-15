import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./header.scss";

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        document.body.classList.toggle("dark");
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        let currentHour = new Date().getHours();
        if (currentHour >= 18) toggleDarkMode();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <header>
            <nav
                className={
                    "navbar fixed-top navbar-expand-lg shadow " +
                    (isDarkMode
                        ? "navbar-dark bg-dark"
                        : "navbar-light bg-light")
                }
            >
                <div className="container">
                    <a
                        className={
                            "navbar-brand btn " +
                            (isDarkMode
                                ? "btn-outline-light"
                                : "btn-outline-dark")
                        }
                        href="/"
                    >
                        HK
                    </a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    activeClass="active"
                                    to="home"
                                    offset={-70}
                                    spy={true}
                                    smooth={true}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    activeClass="active"
                                    to="about"
                                    offset={-70}
                                    spy={true}
                                    smooth={true}
                                >
                                    About Me
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    activeClass="active"
                                    to="projects"
                                    offset={-70}
                                    spy={true}
                                    smooth={true}
                                >
                                    Projects
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    activeClass="active"
                                    to="contact"
                                    offset={-70}
                                    spy={true}
                                    smooth={true}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <button
                        className={
                            "btn btn-sm rounded-circle ml-3 " +
                            (isDarkMode ? "btn-light" : "btn-dark")
                        }
                        onClick={toggleDarkMode}
                    >
                        &nbsp;&nbsp;&nbsp;
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
