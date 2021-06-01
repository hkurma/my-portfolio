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
                            Hello! Thanks for stopping by to take a look at my
                            portfolio. I'm Harish Kurma, Software Engineer by
                            profession for more than 5 years. I did my Master's
                            in Computer and Information Sciences from Kent State
                            University, Ohio, United States. I have a great
                            passion and interest towards application development
                            from my Bachelor's, which drived me towards pursing
                            Master's and then helped me to land in my dream job.
                            I love to explore new techologies and work on
                            hobby/pet projects. Developed web/mobile
                            applications for various clients I have worked with.
                            My dream is to create a consumer facing product that
                            will be used by a large scale of users and I'm
                            working towards it.
                            <br />
                            <br />
                            <br />
                            Thank you!
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
