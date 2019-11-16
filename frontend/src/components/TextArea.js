import React from "react";
import PropTypes from "prop-types";

const TextArea = ({ label, children, name, ...props }) => {
  return (
    <label htmlFor={name}>
      {label}
      <textarea {...props} {...{ name }} />
      {children}
    </label>
  );
};

TextArea.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default TextArea;
