import React from "react";
import { StyledLoadingSpinner } from "../styles/General";

const LoadingSpinner = () => {
  return (
    <StyledLoadingSpinner>
      <div className="loader" />
    </StyledLoadingSpinner>
  );
};

export default LoadingSpinner;
