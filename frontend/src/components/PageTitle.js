import React from "react";
import PropTypes from "prop-types";
import BreadCrumbs from "./BreadCrumbs";
import PageTitleStyles from "../styles/PageTitleStyles";

const PageTitle = ({ title }) => {
  return (
    <PageTitleStyles>
      <div className="container">
        <h1>{title}</h1>
        <BreadCrumbs activePage={title} />
      </div>
    </PageTitleStyles>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
