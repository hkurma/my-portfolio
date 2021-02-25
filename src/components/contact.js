import React from "react";
import "./contact.scss";

const Contact = () => {
    return (
        <section id="contact">
            <div className="container">
                <h1 className="heading">Contact</h1>
                <div className="container text-center mb-5">
                    <p className="mb-5">Let's get connected!</p>
                    <a
                        target="_blank"
                        href="https://www.linkedin.com/in/harish-kurma-9083b7149"
                        rel="noreferrer"
                    >
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="mailto:hkurma0504@gmail.com">
                        <i className="far fa-envelope"></i>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
