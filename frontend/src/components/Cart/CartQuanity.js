import React from "react";
import PropTypes from "prop-types";
import { CartItemQuanityStyles } from "../../styles/CartStyles";

const CartQuanity = ({ updatedQuantity, setUpdatedQuantity }) => {
  return (
    <CartItemQuanityStyles className="input-group" htmlFor="quantity">
      {/* Quantity */}
      Qty
      <fieldset>
        <button
          className="minus"
          onClick={() => {
            setUpdatedQuantity(prev => prev - 1);
          }}
          type="button"
        >
          Reduce Quantity
        </button>
        <input
          className="input-group-field"
          name="quantity"
          onChange={({ target }) => {
            setUpdatedQuantity(target.value);
          }}
          type="number"
          value={updatedQuantity}
        />
        <button
          className="add"
          onClick={() => {
            setUpdatedQuantity(prev => prev + 1);
          }}
          type="button"
        >
          Increase Quantity
        </button>
      </fieldset>
    </CartItemQuanityStyles>
  );
};

CartQuanity.propTypes = {
  updatedQuantity: PropTypes.number.isRequired,
  setUpdatedQuantity: PropTypes.func.isRequired,
};

export default CartQuanity;
