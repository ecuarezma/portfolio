// module.exports = {
//   plugins: [
//     `gatsby-plugin-fontawesome-css`,
//     `gatsby-plugin-styled-components`,
//     `gatsby-plugin-image`,
//     `gatsby-plugin-sharp`,
//   ],
//   plugins: [
//     {
//       resolve: "gatsby-plugin-manifest",
//       options: {
//         icon: "src/assets/mage.png",
//       },
//     },
//   ],
// };
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Edgar Cuarezma Full Stack Developer`,
    siteUrl: `https://www.edgarcuarezma.com`,
  },
  plugins: [
    `gatsby-plugin-fontawesome-css`,
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/mage.png",
      },
    },
  ],
};
