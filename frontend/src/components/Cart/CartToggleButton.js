import React from "react";
import { useMutation } from "react-apollo";
import { TOGGLE_CART_MUTATION } from "../../reslovers/Mutation";
import { CartIcon } from "../Icons";
import CartCount from "../CartCount";

const CartToggleButton = () => {
  const [toggleCart] = useMutation(TOGGLE_CART_MUTATION);

  return (
    <button
      aria-label="open drawer"
      className="svg-button"
      onClick={toggleCart}
      style={{
        position: "relative",
      }}
      type="button"
    >
      <CartCount />
      <CartIcon />
    </button>
  );
};

export default CartToggleButton;
