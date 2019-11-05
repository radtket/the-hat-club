import React from "react";
import styled from "styled-components";

const SectionSmallWrap = styled.section`
  padding-top: 24px;
  padding-bottom: 24px;
`;

const SectionSmall = ({ children }) => {
  return <SectionSmallWrap>{children}</SectionSmallWrap>;
};

export default SectionSmall;
