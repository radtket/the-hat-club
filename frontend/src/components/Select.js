import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const SelectStyles = styled.div`
  position: relative;
  display: block;
  width: 100%;

  &:after,
  &:before {
    content: " ";
    position: absolute;
    right: 18px;
    top: 64%;
    margin-top: -4px;
    border: 6px solid transparent;
    border-top: 8px solid #cc0000;
    pointer-events: none;
  }

  &:before {
    top: 37%;
    z-index: 10;
    border-top: transparent;
    border-bottom: 8px solid #cc0000;
  }

  .form-control {
    background-color: #fff;
    border-radius: 0;
    border: 1px solid #e8e8e8;
    color: #333;
    display: block;
    font-size: 16px;
    /* line-height: normal; */
    padding: 10px 20px;
    width: 100%;
    /* box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s; */

    &:focus {
      border-color: #ddd;
    }
  }

  .select-select {
    outline: 0;
    appearance: none;
    cursor: pointer;
    position: relative;
    padding-right: 50px;
    text-overflow: "";
    user-select: none;

    &:focus {
      border-color: #999;
    }
  }
`;

const Select = ({ options, name, label, ...props }) => {
  return (
    <label htmlFor={name}>
      {label}
      <SelectStyles>
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
      </SelectStyles>
    </label>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Select;
