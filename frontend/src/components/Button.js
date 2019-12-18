/* eslint-disable react/button-has-type */
import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "../styles/Buttons";

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
