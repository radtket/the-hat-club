import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import StyledBreadcrumbs from "../styles/Breadcrumbs";

const BreadCrumbs = ({ activePage, tag }) => {
  return (
    <StyledBreadcrumbs>
      <li>
        <Link to="/">Home</Link>
      </li>
      {tag && (
        <li>
          <Link to={`/${tag}`}>{tag}</Link>
        </li>
      )}
      <li>{activePage}</li>
    </StyledBreadcrumbs>
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
