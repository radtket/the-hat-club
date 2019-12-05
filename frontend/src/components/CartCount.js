import React from "react";
import styled from "styled-components";
import { useQuery } from "react-apollo";
import { CURRENT_USER_QUERY } from "../reslovers/Query";
import { isArrayEmpty } from "../utils/helpers";

const Dot = styled.div`
  background: ${({ theme }) => theme.red};
  color: #fff;
  border-radius: 50%;
  padding: 0;
  width: 16px;
  height: 16px;
  font-weight: 100;
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
  transition: 0.2s linear;
  transform: scale(1);
  font-size: 10px;
  line-height: 16px;
  position: absolute;
  display: block;
  top: 0;
  right: 0;
  margin: 2px;
  box-shadow: 0 2px 4px rgba(255, 0, 0, 0.16), 0 2px 4px rgba(255, 0, 0, 0.23);
`;

const CartCount = () => {
  const { data } = useQuery(CURRENT_USER_QUERY);
  const cart = data && data.me && data.me.cart;

  console.log({ data });
  if (!isArrayEmpty(cart)) {
    return <Dot>{cart.length}</Dot>;
  }

  return null;
};

export default CartCount;
