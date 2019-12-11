import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/Global";
import colors, { black } from "./colors";
import { rgba, spacing } from "./helpers";

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
  colors,
  maxWidth: "1000px",
  bs: `0 12px 24px 0 ${rgba(black, 0.09)}`,
  spacing: {
    small: spacing(2),
    base: spacing(4),
    large: spacing(6),
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
