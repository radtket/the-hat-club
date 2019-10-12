import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline, createMuiTheme } from "@material-ui/core";
import { common, red, green } from "@material-ui/core/colors";
import * as fonts from "../assets/fonts";
import "typeface-roboto";

const futura = {
  fontFamily: "Futura Light",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 300,
  src: `
  local('Futura Light'), local('Futura-Light'),
  url('${fonts.FuturaLightWOFF}') format('woff'),
  url('${fonts.FuturaLightTTF}') format('truetype')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

// Create a theme instance.
const customTheme = createMuiTheme({
  typography: {
    fontFamily: "Futura Light",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [futura],
      },
    },
  },
  palette: {
    primary: {
      main: red.A700,
    },
    secondary: {
      main: common.black,
    },
    error: {
      main: red.A400,
    },
    success: {
      main: green[700],
    },
    background: {
      default: common.white,
    },
  },
});

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={customTheme}>
      {/* <GlobalStyle /> */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
