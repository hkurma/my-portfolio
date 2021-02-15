import React from "react";
import Layout from "../components/layout";
import Home from "../components/home";
import About from "../components/about";
import Projects from "../components/projects";
import Contact from "../components/contact";

const IndexPage = () => {
    return (
        <Layout>
            <Home></Home>
            <About></About>
            <Projects></Projects>
            <Contact></Contact>
        </Layout>
    );
};

export default IndexPage;
