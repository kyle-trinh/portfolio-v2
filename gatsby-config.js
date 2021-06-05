/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const config = require("./config/website")

module.exports = {
  siteMetadata: {
    siteUrl: config.siteUrl,
    title: config.siteTitle,
    description: config.siteDescription,
    keywords: ["Software Engineer", "Web Developer"],
    canonicalUrl: config.siteUrl,
    image: config.siteLogo,
    author: {
      name: config.author,
      minibio: config.minibio,
    },
    social: {
      facebook: config.facebook,
      linkedin: config.linkedin,
      github: config.github,
    },
  },
  /* Your site config here */
  plugins: [
    "@chakra-ui/gatsby-plugin",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Binh Trinh's Portfolio`,
        short_name: `BT Portfolio`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `rgb(49,130,206)`,
        display: `standalone`,
        icon: `static/images/logo.png`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `projects`,
    //     path: `${__dirname}/content/projects`,
    //   },
    // },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        // defaultLayouts: {
        //   default: path.join(__dirname, "./src/templates/markdown-pages.js"),
        // },
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1035,
            },
          },
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: "Cobalt2",
              extensions: [`theme-cobalt2`],
            },
          },
          `gatsby-remark-embedder`,
        ],
      },
    },
    "gatsby-remark-images",
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: `src/utils/typography`,
    // },
  ],
}
