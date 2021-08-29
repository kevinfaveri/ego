module.exports = {
  siteMetadata: {
    title: `Kevin Aguiar`,
    description: `@kevinfaveri personal site which includes portfolio.`,
    author: `@kevinfaveri`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-tinacms',
      options: {
        sidebar: {
          hidden: process.env.NODE_ENV === 'production',
          position: 'displace',
        },
        plugins: ['gatsby-tinacms-git', 'gatsby-tinacms-json'],
      },
    },
    'gatsby-transformer-json',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-155140180-1',
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kevin Faveri Portfolio`,
        short_name: `Kevin Faveri`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#008080`,
        display: `standalone`,
        icon: `src/images/terminal.svg`,
      },
    },
    `gatsby-plugin-offline`,
    'gatsby-plugin-zeit-now',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'customPages',
        path: `${__dirname}/src/custom-pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'menu-items',
        path: `${__dirname}/src/metadata/menu-items`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: 'gatsby-plugin-extract-schema',
      options: {
        dest: `${__dirname}/src/schema.graphql`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Lato', 'Poppins'],
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: [`gatsby-remark-reading-time`],
      },
    },
  ],
};
