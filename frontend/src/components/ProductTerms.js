import React from "react";
import { DeliveryTruckIcon, RefreshIcon } from "./Icons";
import { StyledProductTermsList } from "../styles/Lists";

const ProductTerms = () => {
  return (
    <StyledProductTermsList>
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
    </StyledProductTermsList>
  );
};

export default ProductTerms;
