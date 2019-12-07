import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { position } from "polished";

const SelectStyles = styled.div`
  position: relative;
  display: block;
  width: 100%;

  &:after,
  &:before {
    ${position("absolute", null, "18px", null, null)}
    content: " ";
    margin-top: -4px;
    border: 6px solid transparent;
    border-top: 8px solid #cc0000;
    pointer-events: none;
  }

  &:after {
    top: "64px";
  }

  &:before {
    border-bottom: 8px solid #cc0000;
    border-top: transparent;
    top: 37%;
    z-index: 10;
  }

  .form-control {
    background-color: #fff;
    border-radius: 0;
    border: 1px solid #e8e8e8;
    color: #333;
    display: block;
    font-size: 16px;
    padding: 10px 20px;
    width: 100%;
    /* line-height: normal; */
    /* box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s; */

    &:focus {
      border-color: #ddd;
    }
  }

  .select-select {
    appearance: none;
    cursor: pointer;
    outline: 0;
    padding-right: 50px;
    position: relative;
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
