import React from "react";
import { size } from "polished";
import styled from "styled-components";
import { white, black } from "../utils/colors";

const LoadingWrapper = styled.div`
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

const Loading = () => {
  return (
    <LoadingWrapper>
      <div className="container">
        <div className="ball" />
        <div className="ball" />
        <div className="ball" />
        <div className="ball" />
        <div className="ball" />
        <div className="ball" />
        <div className="ball" />
      </div>
    </LoadingWrapper>
  );
};

export default Loading;
