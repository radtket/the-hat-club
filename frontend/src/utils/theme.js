import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/Global";

// export const gray = {
//   "50": "#FAFAFA",
//   "100": "#F5F5F5",
//   "200": "#EEEEEE",
//   "300": "#E0E0E0",
//   "400": "#BDBDBD",
//   "500": "#9E9E9E",
//   "600": "#757575",
//   "700": "#616161",
//   "800": "#424242",
//   "900": "#212121",
// };

const theme = {
  colors: {
    gray: {
      "100": "#f5f5f5",
      "200": "#eee", // x34 rgb(238, 238, 238)
      "300": "#d3d3d3", // x 3
      "400": "#9e9e9e", // x 5 rgb(158, 158, 158)
      "500": "#747474", // x11
      "600": "#616161", // x 3
      "700": "#424242", // x 19
      "800": "#242424", // x 13 RGBA rgba(36, 36, 36)
    },
    common: {
      black: "#000",
      white: "#fff",
    },
    red: {
      "100": "#a02727", // x 8
      "200": "#cc0000", // x 2
      "300": "#cf3a3a", // x 3
      "400": "#ee5050", // x 13
      "500": "#ff0000", // x5
    },
  },
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)",
  smallSpacing: "12px",
  baseSpacing: "24px",
  largeSpacing: "48px",
  spacing: {
    small: "12px",
    base: "24px",
    large: "48px",
  },
};

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;
