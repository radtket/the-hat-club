import React from "react";
import PropTypes from "prop-types";
import BreadCrumbs from "./BreadCrumbs";
import NavbarStyles from "../styles/PageTitleStyles";

const PageTitle = ({ title }) => {
  return (
    <NavbarStyles>
      <div className="container">
        <h1>{title}</h1>
        <BreadCrumbs activePage={title} />
      </div>
    </NavbarStyles>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
