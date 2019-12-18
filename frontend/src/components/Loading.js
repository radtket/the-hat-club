import React from "react";
import { StyledLoadingWrapper } from "../styles/General";

const Loading = () => {
  return (
    <StyledLoadingWrapper>
      <div className="container">
        <div className="ball" />
        <div className="ball" />
        <div className="ball" />
        <div className="ball" />
        <div className="ball" />
        <div className="ball" />
        <div className="ball" />
      </div>
    </StyledLoadingWrapper>
  );
};

export default Loading;
