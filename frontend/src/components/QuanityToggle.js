import React, { useState } from "react";
import styled from "styled-components";

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
    background: transparent;
    border: 1px solid #343434;
    border-radius: 3px 0 0 3px;
    color: #343434;
    display: inline-flex;
    font-size: 16px;
    font-weight: 400;
    height: 48px;
    justify-content: center;
    line-height: 48px;
    margin: 0;
    max-width: 100%;
    outline: 0;
    padding: 0;
    text-align: center;
    width: 51px;
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
    align-items: center;
    background: transparent;
    border: 1px solid #343434;
    border-radius: 0;
    color: #343434;
    cursor: pointer;
    display: flex;
    font-weight: 400;
    height: 24px;
    justify-content: center;
    margin: 0;
    outline: 0;
    overflow: visible;
    padding: 0;
    position: absolute;
    text-decoration: none;
    text-shadow: none;
    user-select: none;
    width: 23px;
  }

  .plus {
    top: 0;
    right: 0;
    height: 25px;
    line-height: 24px;
    border-radius: 0 3px 0 0;
  }

  .minus {
    bottom: 0;
    right: 0;
    border-radius: 0 0 3px 0;
  }
`;

const QuanityToggle = ({ quantity }) => {
  const [quanityState, setQuanityState] = useState(quantity);
  return (
    <QuanityToggleStyles className="quantity buttons_added">
      <button
        className="minus"
        onClick={e => {
          e.preventDefault();
          setQuanityState(quanityState - 1);
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
          value={quanityState}
        />
      </label>
      <button
        className="plus"
        onClick={e => {
          e.preventDefault();
          setQuanityState(quanityState + 1);
        }}
        type="button"
      >
        +
      </button>
    </QuanityToggleStyles>
  );
};

export default QuanityToggle;
