module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        softRed: "hsl(7, 99%, 70%)",
        yellow: "hsl(51, 100%, 49%)",
        darkCyan: "hsl(167, 40%, 24%)",
        darkBlue: "hsl(198, 62%, 26%)",
        moderateCyan: "hsl(168, 34%, 41%)",
        desaturatedBlue: "hsl(212, 27%, 19%)",
        veryDarkGrayishBlue: "hsl(213, 9%, 39%)",
        darkGrayishBlue: "hsl(232, 10%, 55%)",
        grayishBlue: "hsl(210, 4%, 67%)",
        white: "hsl(0, 0%, 100%)",
        footer: "#91d4c5",
      },
      fontFamily: {
        barlow: ["Barlow"],
        fraunces: ["Fraunces"],
      },
      backgroundImage: {
        headerDesktop: "url('/images/desktop/image-header.jpg')",
        headerMobile: "url('/images/mobile/image-header.jpg')",
        photographyDesktop: "url('/images/desktop/image-photography.jpg')",
        photographyMobile: "url('/images/mobile/image-photography.jpg')",
        graphicDesignDesktop: "url('/images/desktop/image-graphic-design.jpg')",
        graphicDesignMobile: "url('/images/mobile/image-graphic-design.jpg')",
        logo: "url('/images/logo.svg')",
      },
      height: {
        toHeaderDesktopImage: "calc(0.5556 * 100vw)",
        toHeaderMobileImage: "calc(1.434 * 100vw)",
        "750x1200": "calc(1.6 * 100vw)",
        "720x600halfScreen": "calc(0.833 * 100vw / 2)",
      },
      screens: {
        sm: "730px",
      },
      backgroundSize: {
        "1/2": "50% auto",
      },
    },
  },
  plugins: [],
  content: ["./index.html"],
};
