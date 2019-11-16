import React from "react";
import styled from "styled-components";

const LoadingWrapper = styled.div`
  background: #000000;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .ball {
    width: 10px;
    height: 10px;
    margin: 10px auto;
    border-radius: 50px;

    &:nth-child(1) {
      background: #ffffff;
      animation: right 1s infinite ease-in-out;
    }

    &:nth-child(2) {
      background: #ffffff;
      animation: left 1.1s infinite ease-in-out;
    }

    &:nth-child(3) {
      background: #ffffff;
      animation: right 1.05s infinite ease-in-out;
    }

    &:nth-child(4) {
      background: #ffffff;
      animation: left 1.15s infinite ease-in-out;
    }

    &:nth-child(5) {
      background: #ffffff;
      animation: right 1.1s infinite ease-in-out;
    }

    &:nth-child(6) {
      background: #ffffff;
      animation: left 1.05s infinite ease-in-out;
    }

    &:nth-child(7) {
      background: #ffffff;
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
