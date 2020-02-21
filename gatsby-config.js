module.exports = {
  siteMetadata: {
    title: `Gatsby Days CDMX`,
    description: `Asiste a las conferencias para aprender a diseñar, desarrollar y desplegar aplicaciones modernas sobre el JAM stack. Contruye sitios y aplicaciones rápidas, seguras y sin servidores.`,
    author: `@jossdz`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby-Mexico-meetup`,
        short_name: `GatsbyMx`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
