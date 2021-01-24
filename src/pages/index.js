import * as React from "react";
import Layout from '../components/layout/layout';
import Home from '../components/home/home';
import About from '../components/about/about';
import Projects from '../components/projects/projects';
import Skills from '../components/skills/skills';
import Contact from '../components/contact/contact';

const IndexPage = () => {
  return (
    <Layout>
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
    </Layout>
  );
};

export default IndexPage;
