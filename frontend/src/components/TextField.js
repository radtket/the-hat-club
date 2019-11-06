import React from "react";

const TextField = ({ label, children, ...props }) => {
  return (
    <label htmlFor={props.name}>
      {label}
      <input {...props} />
      {children}
    </label>
  );
};

export default TextField;
