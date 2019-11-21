import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import BreadCrumbs from "./BreadCrumbs";
import { SmallSection } from "./Sections";

const PageTitleStyles = styled(SmallSection)`
  margin-bottom: ${({ theme }) => theme.largeSpacing};
  text-align: center;

  h1 {
    font-family: "Maisonneue Bold";
    font-size: 64px;
    margin-bottom: ${({ theme }) => theme.smallSpacing};
    margin-top: 0;
  }
`;

const PageTitleStacked = ({ title }) => {
  return (
    <PageTitleStyles className="container">
      <h1>{title}</h1>
      <BreadCrumbs activePage={title} />
    </PageTitleStyles>
  );
};

PageTitleStacked.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitleStacked;
