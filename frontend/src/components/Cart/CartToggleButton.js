import React from "react";
import PropTypes from "prop-types";
import { useMutation } from "react-apollo";
import { TOGGLE_CART_MUTATION } from "../../reslovers/Mutation";
import { CartIcon } from "../Icons";

const CartToggleButton = ({ itemsInCart }) => {
  const [toggleCart] = useMutation(TOGGLE_CART_MUTATION);

  return (
    <button
      aria-label="open drawer"
      className="svg-button"
      onClick={toggleCart}
      type="button"
    >
      <CartIcon />
    </button>
  );
};

CartToggleButton.propTypes = {
  itemsInCart: PropTypes.number,
};

CartToggleButton.defaultProps = {
  itemsInCart: 0,
};

export default CartToggleButton;
