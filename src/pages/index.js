import React from "react";
import Header from "../components/header";
import Home from "../components/home";
import About from "../components/about";
import Projects from "../components/projects";
import Contact from "../components/contact";

const IndexPage = () => {
    return (
        <>
            <Header></Header>
            <main>
                <Home></Home>
                <About></About>
                <Projects></Projects>
                <Contact></Contact>
            </main>
        </>
    );
};

export default IndexPage;
