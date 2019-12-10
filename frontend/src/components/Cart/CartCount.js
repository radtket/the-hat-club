import React from "react";
import styled from "styled-components";
import { useQuery } from "react-apollo";
import { size, position } from "polished";
import { CURRENT_USER_QUERY } from "../../reslovers/Query";
import { isArrayEmpty } from "../../utils/helpers";

const Dot = styled.div`
  ${size("16px")}
  ${position("absolute", 0, 0, null, null)}
  background: ${({ theme: { colors } }) => colors.red[500]};
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(255, 0, 0, 0.16), 0 2px 4px rgba(255, 0, 0, 0.23);
  color: #fff;
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

const CartCount = () => {
  const { data } = useQuery(CURRENT_USER_QUERY);
  const cart = data && data.me && data.me.cart;

  return !isArrayEmpty(cart) && <Dot>{cart.length}</Dot>;
};

export default CartCount;
