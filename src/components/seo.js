import React from "react";
import { Helmet } from "react-helmet";

const SEO = () => {
    const metadata = {
        title: "Harish Kurma",
        description: "Static portfolio site generated using GatsbyJS",
        image: "images/icon.png",
        url: "https://hkurma.netlify.com"
    };

    return (
        <Helmet title={metadata.title}>
            <meta name="description" content={metadata.description} />
            <meta name="image" content={metadata.image} />
            {metadata.url && <meta property="og:url" content={metadata.url} />}
            {metadata.title && (
                <meta property="og:title" content={metadata.title} />
            )}
            {metadata.description && (
                <meta
                    property="og:description"
                    content={metadata.description}
                />
            )}
            {metadata.image && (
                <meta property="og:image" content={metadata.image} />
            )}
            <meta name="twitter:card" content="summary_large_image" />
            {metadata.title && (
                <meta name="twitter:title" content={metadata.title} />
            )}
            {metadata.description && (
                <meta
                    name="twitter:description"
                    content={metadata.description}
                />
            )}
            {metadata.image && (
                <meta name="twitter:image" content={metadata.image} />
            )}
        </Helmet>
    );
};

export default SEO;
