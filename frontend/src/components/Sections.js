import styled from "styled-components";

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
  padding: 60px 0;

  @media (min-width: 480px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }

  @media (min-width: 768px) {
    padding-top: 120px;
    padding-bottom: 120px;
  }

  @media (min-width: 992px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }
`;

export const SmallSection = styled(Section)`
  padding: 30px 0;

  @media (min-width: 480px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }

  @media (min-width: 768px) {
    padding-top: 70px;
    padding-bottom: 70px;
  }
`;
