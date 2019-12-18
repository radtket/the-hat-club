import React from "react";
import PropTypes from "prop-types";
import { StyledQuanityToggle } from "../styles/Inputs";

const QuanityToggle = ({ quantityState, setQuantityState }) => {
  return (
    <StyledQuanityToggle className="quantity buttons_added">
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
    </StyledQuanityToggle>
  );
};

QuanityToggle.propTypes = {
  quantityState: PropTypes.number.isRequired,
  setQuantityState: PropTypes.func.isRequired,
};

export default QuanityToggle;
