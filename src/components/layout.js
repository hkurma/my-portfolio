import * as React from "react";
import SEO from "../components/seo";
import Header from "../components/header";

const Layout = ({ children }) => {
    return (
        <>
            <SEO></SEO>
            <Header></Header>
            <main>{children}</main>
        </>
    );
};

export default Layout;
