module.exports = {
  siteMetadata: {
    title: "its-a-rock-fact",
  },
  plugins: ["gatsby-plugin-react-helmet", {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `GatsbyJS`,
      short_name: `GatsbyJS`,
      start_url: `/`,
      background_color: `#f7f0eb`,
      theme_color: `#a2466c`,
      display: `standalone`,
      icon: `src/images/icon.png`
    }}],
};
