module.exports = {
  plugins: [`gatsby-plugin-styled-components`],
  plugins: [`gatsby-plugin-fontawesome-css`],
  plugins: [
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Roboto`,
            file: `"https://fonts.googleapis.com/css2?family=Fira+Sans:wght@200;400&amp;family=Roboto:ital,wght@0,300;0,400;0,700;1,100&amp;display=swap"`,
          },
        ],
      },
    },
  ],

  // plugins: [
  //   {
  //     resolve: 'gatsby-plugin-manifest',
  //     options: {
  //       icon: 'src/assets/images/icon.png',
  //     },
  //   },
  // ],
};
