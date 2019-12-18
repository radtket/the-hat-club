import React from "react";
import PropTypes from "prop-types";
import { StyledSelect } from "../styles/Inputs";

const Select = ({ options, name, label, ...props }) => {
  return (
    <label htmlFor={name}>
      {label}
      <StyledSelect>
        <select
          className="select-select  form-control"
          id={name}
          {...props}
          {...{ name }}
        >
          {options.map(value => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </StyledSelect>
    </label>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Select;
