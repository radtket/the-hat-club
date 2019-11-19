import React from "react";
import PropTypes from "prop-types";
import { isArrayEmpty } from "../../utils/helpers";
import CartItem from "./CartItem";

const CartList = ({ cart }) => {
  if (isArrayEmpty(cart)) {
    return (
      <li
        className="cart-item"
        style={{
          textAlign: "center",
        }}
      >
        Your cart is Empty
      </li>
    );
  }

  return cart.map(item => <CartItem key={item.id} {...item} />);
};

CartList.propTypes = {
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

CartList.defaultProps = {
  cart: [],
};

export default CartList;
