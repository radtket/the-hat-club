import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const RadioStyles = styled.label`
  display: inline-block !important;
  padding-left: 24px;
  margin-bottom: 0;
  vertical-align: middle;
  font-weight: normal;
  cursor: pointer;
  margin-right: 24px;
  position: relative;
  line-height: 48px;

  input {
    margin: -10px 0 0 -22px;
    top: 50%;
    position: absolute;
    box-sizing: border-box;
    padding: 0;
    height: unset;
    line-height: normal;
  }
`;

const RadioButton = ({ label, children, name, ...props }) => {
  return (
    <RadioStyles htmlFor={name}>
      <input type="radio" {...props} {...{ name }} />
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
