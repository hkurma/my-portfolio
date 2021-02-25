import * as React from "react";

const Footer = () => {
    return (
        <footer className="p-3">
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        Powered by{" "}
                        <a
                            href="https://www.gatsbyjs.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Gatsby
                        </a>
                    </div>
                    <div className="col-md-auto">
                        Icons by{" "}
                        <a
                            href="https://fontawesome.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Fontawesome
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
