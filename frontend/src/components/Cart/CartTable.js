import React from "react";
import { Box } from "@rebass/grid";
import PropTypes from "prop-types";
import CartTableRow from "./CartTableRow";
import { StyledCartTable } from "../../styles/Tables";

const CartTable = ({ cart }) => {
  return (
    <Box width={1}>
      <StyledCartTable cellSpacing="0">
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th className="product-name">Product</th>
            <th className="product-price">Price</th>
            <th className="product-quantity">Quantity</th>
            <th className="product-subtotal">Subtotal</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(({ id, item, quantity }) => {
            return (
              <CartTableRow key={id} {...{ ...item, quantity, itemId: id }} />
            );
          })}
        </tbody>
      </StyledCartTable>
    </Box>
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
