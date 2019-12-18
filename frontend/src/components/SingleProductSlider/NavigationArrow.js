import React from "react";
import PropTypes from "prop-types";
import { ChevronRight, ChevronLeft } from "../Icons";
import { StyledNavigationArrowButton } from "../../styles/Buttons";

const NavigationArrow = ({ onClick, isPrev, size }) => {
  return (
    <StyledNavigationArrowButton
      {...{ onClick, size }}
      className={`slide-${isPrev ? "prev" : "next"} `}
      type="button"
    >
      {isPrev ? <ChevronLeft /> : <ChevronRight />}
    </StyledNavigationArrowButton>
  );
};

NavigationArrow.propTypes = {
  onClick: PropTypes.func,
  isPrev: PropTypes.bool,
  size: PropTypes.string,
};

NavigationArrow.defaultProps = {
  isPrev: false,
  onClick: null,
  size: "24px",
};

export default NavigationArrow;
