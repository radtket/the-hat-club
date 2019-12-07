import React from "react";
import { position } from "polished";
import styled from "styled-components";
import { DeliveryTruckIcon, RefreshIcon } from "./Icons";

const ListStyles = styled.ul`
  margin: 10px 0;

  li {
    font-size: 16px;
    margin-bottom: 8px;
    padding-left: 24px;
    position: relative;

    a {
      display: block;
    }

    /* &::before { */
    svg {
      ${position("absolute", "2px", null, null, "2px")}
      height: 14px;
      vertical-align: middle;
      /* width: 14px; */
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
