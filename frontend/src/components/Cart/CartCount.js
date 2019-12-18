import React from "react";
import PropTypes from "prop-types";
import { isArrayEmpty } from "../../utils/helpers";
import { StyledDot } from "../../styles/CartStyles";

const CartCount = ({ me }) => {
  if (!me || isArrayEmpty(me.cart)) {
    return null;
  }

  return <StyledDot>{me.cart.length}</StyledDot>;
};

CartCount.propTypes = {
  me: PropTypes.shape({
    cart: PropTypes.arrayOf(PropTypes.object),
  }),
};

CartCount.defaultProps = {
  me: {
    cart: [],
  },
};

export default CartCount;
