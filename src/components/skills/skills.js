import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Skills = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "skills/angular.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <div id="skills" className="content">
      <div className="heading">Skills</div>
      <div className="row">
        <div className="col-lg-2">
          <Img fluid={data.file.childImageSharp.fluid} alt="Angular" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
