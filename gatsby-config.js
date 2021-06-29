module.exports = {
  siteMetadata: {
    title: "fmm-test",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "https://fmm.devfmm.com/graphql",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
  ],
};
