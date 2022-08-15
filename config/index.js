module.exports = {
  //-- SITE SETTINGS -----
  author: "@konstantinmuenster",
  siteTitle: "May Choi's portfolio",
  siteShortTitle: "May Choi", // Used as logo text in header, footer, and splash screen
  siteDescription:
    "May Choi's Portfolio site (Frontend Developer).",
  siteUrl: "https://gatsby-starter-portfolio-minimal.netlify.app/",
  siteLanguage: "en_US",
  siteIcon: "content/favicon-32x32.png", // Relative to gatsby-config file
  seoTitleSuffix: "Portfolio Minimal", // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"
  useCookieBar: false, // If you use Google Analytics and want to be GDPR-compliant, set it to true
  googleAnalyticsTrackingId: "", // e.g. UA-XXXXXX-X

  // -- THEME SETTINGS -----
  colors: {
    lightTheme: {
      primary: "#000000",
      secondary: "#FFF4D9",
      tertiary: "#F2F2F2",
      text: "#000000",
      subtext: "#555555",
      background: "#FFFFFF",
      card: "#FFFFFF",
      scrollBar: "rgba(0, 0, 0, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
    darkTheme: {
      primary: "#FAFAFA",
      secondary: "#2A2926",
      tertiary: "#252525",
      text: "rgba(255, 255, 255, 0.87)",
      subtext: "#AAAAAA",
      background: "#121212",
      card: "#1C1C1C",
      scrollBar: "rgba(255, 255, 255, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
  },
  fonts: {
    primary: "Roboto, Arial, sans-serif",
  },

  //-- SOCIAL MEDIA SETTINGS -----
  // There are icons available for the following platforms:
  // Medium, GitHub, LinkedIn, E-Mail
  socialMedia: [
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/may-hyoyeon-choi-735b8ab0/",
    },
    {
      name: "Github",
      url:
        "https://github.com/hymaychoi",
    }
  ],

  //-- NAVIGATION SETTINGS -----
  navLinks: {
    menu: [
      {
        name: "About Me",
        url: "/#about",
      },
      {
        name: "Projects",
        url: "/#projects",
      },
      {
        name: "Contact",
        url: "/#contact",
      },
    ],
    button: {
      useFileName: true,
      name: "Resume",
      fileName: "Resume - May Choi_ AUG15_2022", // the file has to be placed inside the static folder at the root level
      url: "", // if useFileName=false, you can set an anchor link here and use the button for navigational purposes
    },
  },
  footerLinks: [
    {
      name: "Privacy",
      url: "/privacy",
    },
  ],
}
