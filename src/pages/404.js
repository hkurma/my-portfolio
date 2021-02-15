import * as React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";

const styles = {
    height: "100vh"
};

const NotFoundPage = () => {
    return (
        <Layout>
            <div
                className="container d-flex justify-content-center align-items-center"
                style={styles}
            >
                <div className="text-center">
                    <h2>
                        <i class="fas fa-exclamation-circle"></i>
                    </h2>
                    <h1 className="mb-5">Page not found</h1>
                    <Link to="/">
                        <button
                            type="button"
                            className="btn btn-outline-primary"
                        >
                            Return to Home
                        </button>
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export default NotFoundPage;
