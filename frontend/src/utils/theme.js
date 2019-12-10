import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/Global";

// eslint-disable-next-line no-unused-vars
const colors = [
  "#000", // x 36
  "#111", //  x 7 rgb(17, 17, 17)
  "#242424", // x 13 RGBA rgba(36, 36, 36)
  "#333", // x 13 posible replacement "#424242"
  "#464646", // x 5 posible replacement "#424242"
  "#747474", // x11
  "#888", // x 3
  "#9e9e9e", // x 5 rgb(158, 158, 158)
  "#d3d3d3", // x 3
  "#eee", // x34 rgb(238, 238, 238)
  "#fff", // x 61
  "#a02727", // x 8
  "#cc0000", // x 2
  "#cf3a3a", // x 3
  "#ee5050", // x 13
  "#ff0000", // x5
];

export const gray = {
  "50": "#FAFAFA",
  "100": "#F5F5F5",
  "200": "#EEEEEE",
  "300": "#E0E0E0",
  "400": "#BDBDBD",
  "500": "#9E9E9E",
  "600": "#757575",
  "700": "#616161",
  "800": "#424242",
  "900": "#212121",
};

const theme = {
  red: "#FF0000",
  lightgrey: "#eee",
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
