import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import BreadCrumbStyles from "../styles/BreadCrumbStyles";

const BreadCrumbs = ({ activePage, tag }) => {
  return (
    <BreadCrumbStyles>
      <li>
        <Link to="/">Home</Link>
      </li>
      {tag && (
        <li>
          <Link to={`/${tag}`}>{tag}</Link>
        </li>
      )}
      <li>{activePage}</li>
    </BreadCrumbStyles>
  );
};

BreadCrumbs.propTypes = {
  activePage: PropTypes.string.isRequired,
  tag: PropTypes.string,
};

BreadCrumbs.defaultProps = {
  tag: null,
};

export default BreadCrumbs;
