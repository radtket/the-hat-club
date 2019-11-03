import React from "react";
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

export default PageTitle;
