import React from "react";
import PropTypes from "prop-types";
import { StyledRadioLabel } from "../styles/Inputs";

const RadioButton = ({ label, children, name, ...props }) => {
  return (
    <StyledRadioLabel htmlFor={name}>
      <input type="radio" {...{ ...props, name }} />
      {label}
    </StyledRadioLabel>
  );
};

RadioButton.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

RadioButton.defaultProps = {
  children: null,
};

export default RadioButton;
