import React from "react";
import PropTypes from "prop-types";
import BreadCrumbs from "./BreadCrumbs";
import { StyledPageTitle } from "../styles/Typography";

const PageTitleStacked = ({ title, label }) => {
  return (
    <StyledPageTitle className="container">
      <h1>{title}</h1>
      <BreadCrumbs activePage={label || title} />
    </StyledPageTitle>
  );
};

PageTitleStacked.propTypes = {
  title: PropTypes.string.isRequired,
  label: PropTypes.string,
};

PageTitleStacked.defaultProps = {
  label: null,
};

export default PageTitleStacked;
