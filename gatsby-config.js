module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "portfolio",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "RPTKIMQsFQsXLld43yu9nFQanqtPVskuxPNk8d6g4Is",
        spaceId: "trdp6byujlhx",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
