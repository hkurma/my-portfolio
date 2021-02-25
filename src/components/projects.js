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
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            url: "https://hkurma.netlify.app",
            source: "https://github.com/hkurma/my-portfolio",
            image: "my-portfolio"
        }
    ];
    const getImage = (name) => {
        return data.images.edges
            .filter((i) => i.node.name === name)
            .map(({ node }) => {
                return node.childImageSharp.fluid;
            });
    };
    return (
        <section id="projects">
            <div className="container">
                <h1 className="heading">Projects</h1>
                <div className="container">
                    {projects.map((project, index) => (
                        <div className="row py-5">
                            <div
                                className={
                                    "col-md-4 mb-5 text-center " +
                                    (index % 2 === 1 ? "order-2" : "order-1")
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
                                    "offset-md-1 col-md-7 " +
                                    (index % 2 === 1 ? "order-1" : "order-2")
                                }
                            >
                                <h3 className="text-primary mb-3">
                                    {project.title}
                                </h3>
                                <p className="mb-5">{project.description}</p>
                                <a
                                    type="button"
                                    className="btn btn-outline-primary mr-3"
                                    target="_blank"
                                    href={project.url}
                                    rel="noreferrer"
                                >
                                    Check it out
                                    <i class="fas fa-long-arrow-alt-right ml-2"></i>
                                </a>
                                <a
                                    type="button"
                                    className="btn btn-link"
                                    target="_blank"
                                    href={project.source}
                                    rel="noreferrer"
                                >
                                    Source
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
