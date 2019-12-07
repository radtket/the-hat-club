import React from "react";
import styled from "styled-components";
import { size } from "polished";

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
      box-shadow: 30px 0 0 #f8b334;
    }

    50% {
      box-shadow: 0 0 0 #f8b334;
      margin-bottom: 0;
      transform: translate(15px, 15px);
    }

    100% {
      box-shadow: 30px 0 0 #f8b334;
      margin-bottom: 10px;
    }
  }

  @keyframes ball2 {
    0% {
      box-shadow: 30px 0 0 #97bf0d;
    }

    50% {
      box-shadow: 0 0 0 #97bf0d;
      margin-top: -20px;
      transform: translate(15px, 15px);
    }

    100% {
      box-shadow: 30px 0 0 #97bf0d;
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
      background-color: #cb2025;
      box-shadow: 30px 0 0 #f8b334;
      margin-bottom: 10px;
    }

    &:after {
      animation: ball2 1s infinite;
      background-color: #00a096;
      box-shadow: 30px 0 0 #97bf0d;
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
