import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const SectionSmallWrap = styled.section`
  padding-top: 24px;
  padding-bottom: 24px;
`;

const SectionSmall = ({ children }) => {
  return <SectionSmallWrap>{children}</SectionSmallWrap>;
};

SectionSmall.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionSmall;
