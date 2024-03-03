import { createTheme } from "@mui/material/styles";

import "@fontsource/inter";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#CAD5ED",
    },
    secondary: {
      main: '#94a3b8'
    },
    success: {
        main: '#5eead4'
    },
    common: {
      white: "#FAF9F6",
    },
  },
  typography: {
    h1: {
      fontFamily: "Inter",
      fontWeight: 700,
      fontSize: "2.5rem",
      lineHeight: 1.167,
    },
    h2: {
      fontFamily: "Inter",
      fontWeight: 700,
      fontSize: "2rem",
      lineHeight: 1.2,
    },
    h3: {
      fontFamily: "Inter",
      fontWeight: 700,
      fontSize: "1.75rem",
      lineHeight: 1.167,
    },
    h4: {
      fontFamily: "Inter",
      fontWeight: 700,
      fontSize: "1.5rem",
      lineHeight: 1.235,
    },
    h5: {
      fontFamily: "Inter",
      fontWeight: 700,
      fontSize: "1.25rem",
      lineHeight: 1.334,
    },
    h6: {
      fontFamily: "Inter",
      fontWeight: 700,
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    button: {
      fontFamily: "Inter",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    body1: {
      fontFamily: "Inter",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    body2: {
      fontFamily: "Inter",
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: 1.43,
    },
  },
});

export default theme;
