module.exports = {
    siteMetadata: {
        title: "My Portfolio",
        siteUrl: "https://hkurma.netlify.com"
    },
    plugins: [
        "gatsby-plugin-netlify-cms",
        "gatsby-plugin-sass",
        "gatsby-plugin-sharp",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-offline",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: `Harish Kurma`,
                short_name: `HK`,
                start_url: `/`,
                background_color: `#17a2b8`,
                theme_color: `#17a2b8`,
                display: `standalone`,
                icon: "static/images/logo.png"
            }
        },
        "gatsby-transformer-remark",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./static/images/"
            },
            __key: "images"
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/"
            },
            __key: "pages"
        }
    ]
};
