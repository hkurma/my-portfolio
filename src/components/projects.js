import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import Tilt from "react-tilt";
import Fade from "react-reveal/Fade";

const Projects = () => {
    const data = useStaticQuery(graphql`
        query {
            images: allFile(
                filter: { relativePath: { regex: "/^(projects)/" } }
            ) {
                edges {
                    node {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                        name
                    }
                }
            }
        }
    `);
    const projects = [
        {
            title: "My Portfolio",
            description:
                "A Static Website created using GatsbyJS, a ReactJS based Static Website Generator. It is my portfolio website to showcase my hobby projects and to learn more about me. This website has a light/dark mode which can be toggled, but defaults to appropriate theme based on the local time. It is hosted on Netlify and use Netlify CMS to manage content. Also, this application can be downloaded as a Progressive Web App (PWA) on supported mobile devices.",
            url: "https://hkurma.netlify.app",
            source: "https://github.com/hkurma/my-portfolio",
            image: "my-portfolio"
        },
        {
            title: "Recurr",
            description:
                "A Progressive Web Application (PWA) to manage recurring tasks and receive notifications on the schedules day. Built using React JS (Typescript) and used Firebase as Backend as a Service for Authentication and Realtime Database. Firebase Cloud Functions and Messaging is used for sending out notifications to the user. User's can login using their Google account and start creating recurring tasks to receive notifications on the scheduled day.",
            url: "https://recurr-1a3ba.firebaseapp.com",
            source: "https://github.com/hkurma/recurr",
            image: "recurr"
        }
    ];
    const getImage = (name) => {
        return data.images.edges
            .filter((i) => i.node.name === name)
            .map(({ node }) => {
                return node.childImageSharp.fluid;
            });
    };
    const navigate = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };
    return (
        <section id="projects" className="py-5">
            <div className="container">
                <h1 className="heading">Projects</h1>
                <div className="container">
                    {projects.map((project, index) => (
                        <div className="row py-5" key={index}>
                            <div
                                className={
                                    "col-md-4 mb-5 text-center " +
                                    (index % 2 === 1
                                        ? "offset-md-1  order-2"
                                        : "order-1")
                                }
                            >
                                <Tilt>
                                    <Fade bottom={true}>
                                        <Img
                                            className="shadow"
                                            fluid={getImage(project.image)}
                                            alt="Harish Kurma"
                                        />
                                    </Fade>
                                </Tilt>
                            </div>
                            <div
                                className={
                                    "col-md-7 " +
                                    (index % 2 === 1
                                        ? "order-1"
                                        : "offset-md-1  order-2")
                                }
                            >
                                <h3 className="text-primary mb-3">
                                    {project.title}
                                </h3>
                                <p className="mb-5">{project.description}</p>
                                <button
                                    type="button"
                                    className="btn btn-outline-primary mr-3"
                                    onClick={() => navigate(project.url)}
                                >
                                    Check it out
                                    <i className="fas fa-long-arrow-alt-right ml-2"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-link"
                                    onClick={() => navigate(project.source)}
                                >
                                    Source
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
