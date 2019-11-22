import React from "react";
import { useMutation } from "react-apollo";
import PropTypes from "prop-types";
import { TOGGLE_CART_MUTATION } from "../../reslovers/Mutation";

const CartToggleButton = ({ children, ...props }) => {
  const [toggleCart] = useMutation(TOGGLE_CART_MUTATION);

  return (
    <button
      aria-label="Open/Close Cart"
      onClick={toggleCart}
      {...props}
      type="button"
    >
      {children}
    </button>
  );
};

CartToggleButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartToggleButton;
