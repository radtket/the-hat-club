import styled from "styled-components";
import { padding } from "polished";

export const Section = styled.section`
  width: 100%;
  display: block;
  position: relative;
  overflow: hidden;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  box-sizing: border-box;
`;

export const PageSection = styled(Section)`
  ${padding("60px", 0)}

  @media (min-width: 480px) {
    ${padding("80px", null)}
  }

  @media (min-width: 768px) {
    ${padding("120px", null)}
  }

  @media (min-width: 992px) {
    ${padding("140px", null)}
  }
`;

export const SmallSection = styled(Section)`
  ${padding("30px", 0)}

  @media (min-width: 480px) {
    ${padding("50px", null)}
  }

  @media (min-width: 768px) {
    ${padding("70px", null)}
  }
`;
