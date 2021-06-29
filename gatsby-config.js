module.exports = {
  siteMetadata: {
    title: "fmm-test",
    description:"testing gatsby for fmm main site"
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
    "gatsby-plugin-sharp"
  ],
};
