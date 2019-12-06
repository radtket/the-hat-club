import React from "react";
import styled from "styled-components";
import { DeliveryTruckIcon, RefreshIcon } from "./Icons";

const ListStyles = styled.ul`
  margin: 10px 0;

  li {
    position: relative;
    padding-left: 24px;
    font-size: 16px;
    margin-bottom: 8px;

    a {
      display: block;
    }

    /* &::before { */
    svg {
      position: absolute;
      height: 14px;
      /* width: 14px; */
      vertical-align: middle;
      top: 2px;
      left: 0;
    }
  }

  /* svg {
      height: 0.9375rem;
      width: 0.9375rem;
      vertical-align: middle;
      margin-right: 0.5rem;
    } */
`;

const ProductTerms = () => {
  return (
    <ListStyles>
      <li>
        <RefreshIcon />
        30 day returns.
        <a href="/pages/returns-warranty-complaints">More info about returns</a>
      </li>
      <li>
        <DeliveryTruckIcon />
        Free shipping above $100
        <a href="/pages/shipping-delivery">More info about shipping</a>
      </li>
    </ListStyles>
  );
};

export default ProductTerms;
