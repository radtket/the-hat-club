import { padding, size } from "polished";
import styled from "styled-components";
import { loadingColors, black, white, red, gray } from "../utils/colors";
import { rgba } from "../utils/helpers";

export const StyledFooter = styled.footer`
  ${padding("120px", null, "40px")}
  background: ${red[400]};

  .privacy-policy {
    color: ${white};
    font-size: 14px;
  }

  a {
    color: ${white};

    &:hover {
      color: ${red[100]};
    }
  }

  svg.logo {
    fill: ${red[100]};
    display: block;
    max-width: 240px;
    width: 100%;
  }

  .list--social {
    margin: 0;
    padding: 0;
  }

  .list--social__item {
    display: inline-block;
    vertical-align: middle;
  }

  .list--social__link,
  .list--social__icon {
    display: block;
  }

  .list--social__icon {
    ${size("36px")}
  }

  .list--social {
    svg {
      display: block;
      fill: ${white};
      height: 24px;
    }
  }

  .list--social__link {
    padding: 0.4rem;
    transition-property: fill, transform;
    transform-origin: center;

    &:hover {
      svg {
        fill: ${red[100]};
      }
    }

    &:active {
      transform: scale(0.85);
    }
  }

  h4 {
    margin-top: 0;
    color: ${red[100]};
    letter-spacing: 0.015em;
    text-transform: uppercase;
    font-family: "Maisonneue Bold";
  }

  nav {
    display: flex;
  }

  .menu {
    li {
      margin-bottom: 6px;
    }

    a {
      font-size: 18px;
      font-weight: bold;
      color: ${white};

      &:hover {
        color: ${red[100]};
      }
    }
  }

  .payment-options {
    justify-content: space-evenly;
    display: flex;
    align-items: center;
    width: 100%;

    svg {
      fill: ${red[100]};
      display: block;
      width: 42px;
      max-height: 42px;
    }
  }
`;

export const StyledErrorMessage = styled.div`
  background: white;
  border: 1px solid ${rgba(black, 0.05)};
  border-left: 5px solid ${red[500]};
  margin: 24px 0;
  padding: 24px;

  p {
    margin: 0;
    font-weight: 100;
  }

  strong {
    margin-right: 16px;
  }
`;

export const StyledLoadingWrapper = styled.div`
  ${size("100vh", "100%")}
  background: ${black};

  display: flex;
  justify-content: center;
  align-items: center;

  .ball {
    ${size("10px")}
    margin: 10px auto;
    border-radius: 50px;

    &:nth-child(1) {
      background: ${white};
      animation: right 1s infinite ease-in-out;
    }

    &:nth-child(2) {
      background: ${white};
      animation: left 1.1s infinite ease-in-out;
    }

    &:nth-child(3) {
      background: ${white};
      animation: right 1.05s infinite ease-in-out;
    }

    &:nth-child(4) {
      background: ${white};
      animation: left 1.15s infinite ease-in-out;
    }

    &:nth-child(5) {
      background: ${white};
      animation: right 1.1s infinite ease-in-out;
    }

    &:nth-child(6) {
      background: ${white};
      animation: left 1.05s infinite ease-in-out;
    }

    &:nth-child(7) {
      background: ${white};
      animation: right 1s infinite ease-in-out;
    }
  }

  @keyframes right {
    0% {
      transform: translate(-15px);
    }

    50% {
      transform: translate(15px);
    }

    100% {
      transform: translate(-15px);
    }
  }

  @keyframes left {
    0% {
      transform: translate(15px);
    }

    50% {
      transform: translate(-15px);
    }

    100% {
      transform: translate(15px);
    }
  }
`;

export const StyledLoadingSpinner = styled.div`
  @keyframes rotate {
    0% {
      transform: rotate(0deg) scale(0.8);
    }

    50% {
      transform: rotate(360deg) scale(1.2);
    }

    100% {
      transform: rotate(720deg) scale(0.8);
    }
  }

  @keyframes ball1 {
    0% {
      box-shadow: 30px 0 0 ${loadingColors.yellow};
    }

    50% {
      box-shadow: 0 0 0 ${loadingColors.yellow};
      margin-bottom: 0;
      transform: translate(15px, 15px);
    }

    100% {
      box-shadow: 30px 0 0 ${loadingColors.yellow};
      margin-bottom: 10px;
    }
  }

  @keyframes ball2 {
    0% {
      box-shadow: 30px 0 0 ${loadingColors.green};
    }

    50% {
      box-shadow: 0 0 0 ${loadingColors.green};
      margin-top: -20px;
      transform: translate(15px, 15px);
    }

    100% {
      box-shadow: 30px 0 0 ${loadingColors.green};
      margin-top: 0;
    }
  }

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .loader {
    ${size("50px")}
    animation: rotate 1s infinite;

    &:before,
    &:after {
      ${size("20px")}
      border-radius: 50%;
      content: "";
      display: block;
    }

    &:before {
      animation: ball1 1s infinite;
      background-color: ${red[200]};
      box-shadow: 30px 0 0 ${loadingColors.yellow};
      margin-bottom: 10px;
    }

    &:after {
      animation: ball2 1s infinite;
      background-color: ${loadingColors.teal};
      box-shadow: 30px 0 0 ${loadingColors.green};
    }
  }
`;

export const Section = styled.section`
  background-attachment: fixed;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
  display: block;
  overflow: hidden;
  position: relative;
  width: 100%;
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

export const StyledTab = styled.button`
  color: ${({ isActive }) => (isActive ? black : gray[500])};
  cursor: pointer;
  display: inline-block;
  font-size: 18px;
  line-height: 1;
  margin-bottom: 18px;
  outline: 0;
  padding: 0;
  position: relative;

  /* &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 1px;
    background: ${({ isActive }) => (isActive ? gray[500] : "transparent")};
    bottom: -5px;
    left: 0;
  } */
`;
