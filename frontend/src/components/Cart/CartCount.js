import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { size, position } from "polished";
import { isArrayEmpty, rgba } from "../../utils/helpers";
import { red, white } from "../../utils/colors";

const Dot = styled.div`
  ${size("16px")}
  ${position("absolute", 0, 0, null, null)}
  background: ${red[500]};
  border-radius: 50%;
  box-shadow: 0 2px 4px ${rgba(red[500], 0.16)}, 0 2px 4px ${rgba(
  red[500],
  0.23
)};
  color: ${white};
  display: block;
  font-feature-settings: "tnum";
  font-size: 10px;
  font-variant-numeric: tabular-nums;
  font-weight: 100;
  line-height: 16px;
  margin: 2px;
  padding: 0;
  transform: scale(1);
  transition: 0.2s linear;
`;

const CartCount = ({ me }) => {
  if (!me || isArrayEmpty(me.cart)) {
    return null;
  }

  return <Dot>{me.cart.length}</Dot>;
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
