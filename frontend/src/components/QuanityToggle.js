import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { size } from "polished";
import { gray } from "../utils/colors";

const QuanityToggleStyles = styled.div`
  display: inline-flex;
  padding-right: 22px;
  position: relative;
  vertical-align: middle;

  .screen-reader-text,
  &.hidden {
    display: none;
  }

  .qty {
    ${size("48px", "51px")}
    background: transparent;
    border: 1px solid ${gray[700]};
    border-radius: 3px 0 0 3px;
    color: ${gray[700]};
    display: inline-flex;
    font-size: 16px;
    font-weight: 400;
    justify-content: center;
    line-height: 48px;
    margin: 0;
    max-width: 100%;
    outline: 0;
    padding: 0;
    text-align: center;
    -moz-appearance: textfield;
    -webkit-appearance: textfield;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      margin: 0;
      -moz-appearance: none;
      -webkit-appearance: none;
    }
  }

  span {
    &:hover {
      cursor: pointer;
    }
  }

  .plus,
  .minus {
    ${size("24px", "23px")}
    align-items: center;
    background: transparent;
    border: 1px solid ${gray[700]};
    border-radius: 0;
    color: ${gray[700]};
    cursor: pointer;
    display: flex;
    font-weight: 400;
    justify-content: center;
    margin: 0;
    outline: 0;
    overflow: visible;
    padding: 0;
    position: absolute;
    text-decoration: none;
    text-shadow: none;
    user-select: none;
  }

  .plus {
    border-radius: 0 3px 0 0;
    height: 25px;
    line-height: 24px;
    right: 0;
    top: 0;
  }

  .minus {
    border-radius: 0 0 3px 0;
    bottom: 0;
    right: 0;
  }
`;

const QuanityToggle = ({ quantityState, setQuantityState }) => {
  return (
    <QuanityToggleStyles className="quantity buttons_added">
      <button
        className="minus"
        onClick={e => {
          e.preventDefault();
          if (quantityState >= 2) {
            setQuantityState(quantityState - 1);
          }
          return false;
        }}
        type="button"
      >
        -
      </button>
      <label htmlFor="quantity_5dd71af708050">
        <span className="screen-reader-text">
          Embossed Backpack in Brown quantity
        </span>
        <input
          className="input-text qty text"
          id="quantity_5dd71af708050"
          inputMode="numeric"
          max=""
          min="0"
          name="cart[084b6fbb10729ed4da8c3d3f5a3ae7c9][qty]"
          onChange={e => {
            console.log(e.target, e.target.value);
          }}
          size="4"
          step="1"
          title="Qty"
          type="text"
          value={quantityState}
        />
      </label>
      <button
        className="plus"
        onClick={e => {
          e.preventDefault();
          setQuantityState(quantityState + 1);
        }}
        type="button"
      >
        +
      </button>
    </QuanityToggleStyles>
  );
};

QuanityToggle.propTypes = {
  quantityState: PropTypes.number.isRequired,
  setQuantityState: PropTypes.func.isRequired,
};

export default QuanityToggle;
