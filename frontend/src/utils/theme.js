import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/Global";

// eslint-disable-next-line no-unused-vars
const colors = [
  "#000",
  "#101010",
  "#111",
  "#262626",
  "#272727",
  "#282828",
  "#333",
  "#343434",
  "#393939",
  "#3a3a3a",
  "#464646",
  "#4b4e53",
  "#5f5f5f",
  "#707070",
  "#777",
  "#7e8082",
  "#888",
  "#999",
  "#a0a0a0",
  "#ccc",
  "#e1e1e1",
  "#e8e8e8",
  "#eaeaea",
  "#ededed",
  "#eee",
  "#f6f6f6",
  "#fff",
  "rgb(155, 155, 155)",
  "rgb(241, 241, 241)",
  "#a02727",
  "#cc0000",
  "#cf3a3a",
  "#ee5050",
  "#ff0000",
  "rgb(255, 0, 0)",
];

const theme = {
  red: "#FF0000",
  black: "#393939",
  grey: "#3a3a3a",
  lightgrey: "#e1e1e1",
  offWhite: "#ededed",
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
