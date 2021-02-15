import React from "react";
import "./about.scss";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import Tilt from "react-tilt";
import Fade from "react-reveal/Fade";

const About = () => {
    const data = useStaticQuery(graphql`
        query {
            me: file(relativePath: { eq: "me.jpeg" }) {
                childImageSharp {
                    fixed(width: 320) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            sign: file(relativePath: { eq: "signature.png" }) {
                childImageSharp {
                    fixed(width: 320) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);
    return (
        <section id="about">
            <div className="container">
                <h1 className="heading">About Me</h1>
                <div className="row">
                    <div className="offset-md-1 col-md-3 mb-5 mb-md-0 img">
                        <Tilt>
                            <Fade bottom={true}>
                                <Img
                                    className="shadow-lg"
                                    fixed={data.me.childImageSharp.fixed}
                                    alt="Harish Kurma"
                                />
                            </Fade>
                        </Tilt>
                    </div>
                    <div className="offset-md-1 col-md-7">
                        <p className="mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </p>
                        <Fade right={true}>
                            <Img
                                className="float-right"
                                fixed={data.sign.childImageSharp.fixed}
                                alt="Harish Kurma"
                            />
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
