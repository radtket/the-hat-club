import React from "react";
import PropTypes from "prop-types";
import { useMutation } from "react-apollo";
import { Badge, IconButton } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { TOGGLE_CART_MUTATION } from "../../reslovers/Mutation";

const CartToggleButton = ({ itemsInCart }) => {
  const [toggleCart] = useMutation(TOGGLE_CART_MUTATION);

  return (
    <IconButton
      aria-label="open drawer"
      color="inherit"
      edge="end"
      onClick={toggleCart}
    >
      <Badge badgeContent={itemsInCart} color="secondary">
        <ShoppingCart />
      </Badge>
    </IconButton>
  );
};

CartToggleButton.propTypes = {
  itemsInCart: PropTypes.number.isRequired,
};

export default CartToggleButton;
