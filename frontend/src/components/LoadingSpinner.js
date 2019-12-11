import React from "react";
import styled from "styled-components";
import { size } from "polished";
import { loadingColors, red } from "../utils/colors";

const LoadingWrap = styled.div`
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

const LoadingSpinner = () => {
  return (
    <LoadingWrap>
      <div className="loader" />
    </LoadingWrap>
  );
};

export default LoadingSpinner;
