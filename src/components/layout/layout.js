import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import "./layout.scss";

const Layout = ({ children }) => {  
  return (
    <>      
      <Header></Header>      
      <main>
        <div className="container">{children}</div>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
