import React from "react";
import PropTypes from "prop-types";

const TextField = ({ label, children, name, ...props }) => {
  return (
    <label htmlFor={name}>
      {label}
      <input {...props} {...{ name }} />
      {children}
    </label>
  );
};

TextField.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default TextField;
