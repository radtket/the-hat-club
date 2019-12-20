import React from "react";
import PropTypes from "prop-types";
import { StyledQuanityToggle } from "../styles/Inputs";

const QuanityToggle = ({ loading, quantity, updateQuantity }) => {
  return (
    <StyledQuanityToggle className="quantity buttons_added">
      <button
        className="minus"
        disabled={loading || quantity === 1}
        onClick={() => updateQuantity(quantity - 1)}
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
          onChange={({ target }) => {
            updateQuantity(target.value);
          }}
          size="4"
          step="1"
          title="Qty"
          type="text"
          value={quantity}
        />
      </label>
      <button
        className="plus"
        disabled={loading}
        onClick={() => {
          updateQuantity(quantity + 1);
        }}
        type="button"
      >
        +
      </button>
    </StyledQuanityToggle>
  );
};

QuanityToggle.propTypes = {
  quantity: PropTypes.number.isRequired,
  updateQuantity: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

QuanityToggle.defaultProps = {
  loading: false,
};

export default QuanityToggle;
