import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { position, margin } from "polished";

const RadioStyles = styled.label`
  ${margin(null, "24px", 0, null)}
  cursor: pointer;
  display: inline-block !important;
  font-weight: normal;
  line-height: 48px;
  padding-left: 24px;
  position: relative;
  vertical-align: middle;

  input {
    ${position("absolute", "50%", null, null, null)}
    box-sizing: border-box;
    height: unset;
    line-height: normal;
    margin: -10px 0 0 -22px;
    padding: 0;
  }
`;

const RadioButton = ({ label, children, name, ...props }) => {
  return (
    <RadioStyles htmlFor={name}>
      <input type="radio" {...{ ...props, name }} />
      {label}
    </RadioStyles>
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
