import * as React from "react";
import './skills.scss';
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Skills = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {relativeDirectory: {eq: "skills"}}, sort: {fields: name, order: ASC}) {
        edges {
          node {
            extension
            relativePath
            name
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid             
              }
            }
          }
        }
      }
    }
  `);
  return (
    <div id="skills" className="content">
      <div className="wrapper">
        <div className="heading">Skills</div>
        <div className="row my-3">
          {data.allFile.edges.map((edge) => (
            <div className="col-lg-2 img-container my-auto">
              {edge.node.extension === 'svg' && (
                <img src={"images/" + edge.node.relativePath} alt={edge.node.name} />
              )}
              {edge.node.extension !== 'svg' && (
                <Img fluid={edge.node.childImageSharp?.fluid} alt={edge.node.name}/>
              )}              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
