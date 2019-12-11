import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import BreadCrumbs from "./BreadCrumbs";
import { SmallSection } from "./Sections";

const PageTitleStyles = styled(SmallSection)`
  margin-bottom: ${({ theme }) => theme.spacing.large};
  text-align: center;

  h1 {
    font-family: "Maisonneue Bold";
    font-size: 64px;
    margin: 0 auto 12px;
    max-width: 650px;
  }
`;

const PageTitleStacked = ({ title, label }) => {
  return (
    <PageTitleStyles className="container">
      <h1>{title}</h1>
      <BreadCrumbs activePage={label || title} />
    </PageTitleStyles>
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
