import React from "react";

const TextArea = ({ label, children, ...props }) => {
  return (
    <label htmlFor={props.name}>
      {label}
      <textarea {...props} />
      {children}
    </label>
  );
};

export default TextArea;
