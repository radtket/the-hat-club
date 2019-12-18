import React from "react";
import PropTypes from "prop-types";
import { StyledBigCallout } from "../styles/Typography";

const BigCallout = ({ children, ...props }) => {
  return (
    <StyledBigCallout {...props}>
      <h1>{children}</h1>
    </StyledBigCallout>
  );
};

BigCallout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BigCallout;
