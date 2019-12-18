import React from "react";
import PropTypes from "prop-types";
import CartTableRow from "./CartTableRow";
import { StyledCartTableWrap } from "../../styles/Tables";

const CartTable = ({ cart }) => {
  return (
    <StyledCartTableWrap width={1}>
      <table cellSpacing="0">
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th className="product-name">Product</th>
            <th className="product-price">Price</th>
            <th className="product-quantity">Quantity</th>
            <th className="product-subtotal">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(({ id, item, quantity }) => {
            return <CartTableRow key={id} {...{ ...item, quantity }} />;
          })}
        </tbody>
      </table>
    </StyledCartTableWrap>
  );
};

CartTable.propTypes = {
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

CartTable.defaultProps = {
  cart: [],
};

export default CartTable;
