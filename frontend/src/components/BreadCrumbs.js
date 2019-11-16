import React from "react";
import PropTypes from "prop-types";
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

BreadCrumbs.propTypes = {
  activePage: PropTypes.string.isRequired,
};

export default BreadCrumbs;
