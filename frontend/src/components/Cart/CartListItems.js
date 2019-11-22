import React from "react";
import PropTypes from "prop-types";
import { isArrayEmpty } from "../../utils/helpers";
import CartItem from "./CartItem";
import { CartItemStyles } from "../../styles/CartStyles";

const CartListItems = ({ cart }) => {
  if (isArrayEmpty(cart)) {
    return (
      <CartItemStyles
        style={{
          textAlign: "center",
        }}
      >
        Your cart is Empty
      </CartItemStyles>
    );
  }

  return cart.map(item => <CartItem key={item.id} {...item} />);
};

CartListItems.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      quantity: PropTypes.number,
      item: PropTypes.shape({
        description: PropTypes.string,
        id: PropTypes.string,
        image: PropTypes.string,
        price: PropTypes.number,
        title: PropTypes.string,
      }),
    })
  ),
};

CartListItems.defaultProps = {
  cart: [],
};

export default CartListItems;
