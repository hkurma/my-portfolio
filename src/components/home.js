import React from "react";
import "./home.scss";
import Fade from "react-reveal/Fade";
import Typist from "react-typist";
import { Link } from "react-scroll";

const Home = () => {
    return (
        <section id="home">
            <div className="container">
                <Fade left={true}>
                    <div className="mb-5">
                        <h1 className="display-3 font-weight-bold">
                            Hi, I'm&nbsp;
                            <span className="text-primary">Harish Kurma</span>
                        </h1>
                        <h1 className="font-weight-bold">
                            <Typist avgTypingDelay={100}>
                                Software Engineer by profession and passion.
                            </Typist>
                        </h1>
                    </div>
                </Fade>
                <Fade right={true}>
                    <Link to="about" smooth offset={-65}>
                        <button
                            type="button"
                            className="btn btn-lg btn-outline-primary"
                        >
                            Know More
                        </button>
                    </Link>
                </Fade>
            </div>
        </section>
    );
};

export default Home;
