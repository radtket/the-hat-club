import React from "react";
import { Link } from "react-router-dom";
import BreadCrumbStyles from "../styles/BreadCrumbStyles";

const BreadCrumbs = ({ activePage }) => {
  return (
    <BreadCrumbStyles>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>{activePage}</li>
    </BreadCrumbStyles>
  );
};

export default BreadCrumbs;
