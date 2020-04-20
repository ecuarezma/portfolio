const config = {
  particles: {
    color: {
      value: "#fdf5e6",
    },
    // shape: {
    //   stroke: {
    //     width: 4,
    //     color: "#fdf5e6",
    //   },
    // },
    number: {
      value: 30,
    },
    size: {
      random: {
        enable: true,
        minimumValue: 2,
      },
      value: 4,
    },
    opacity: {
      value: 0.4,
      anim: {
        enable: false,
        random: true,
      },
    },
    line_linked: {
      enable: true,
      distance: 50,
    },
    move: {
      speed: 0.1,
      // straight: true,
      bounce: false,
      out_mode: "out", //"bounce" or "out"
      direction: "top-left",
      // "none"
      // "top"
      // "top-right"
      // "right"
      // "bottom-right"
      // "bottom"
      // "bottom-left"
      // "left"
      // "top-left"
    },
  },
};

export default config;
