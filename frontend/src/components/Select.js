import React from "react";

const Select = ({ options, name, label, ...props }) => {
  return (
    <label htmlFor={name}>
      {label}
      <select id={name} {...props} {...{ name }}>
        {options.map(value => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Select;
