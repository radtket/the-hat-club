import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ChevronRight, ChevronLeft } from "../Icons";

export const NavigationArrowButton = styled.button`
  height: 24px;
  opacity: 0;
  outline: none;
  padding: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.5s;
  width: 24px;
  z-index: 99;

  &:hover {
    svg {
      fill: #000;
    }
  }

  &.slide-prev {
    left: -24px;
  }

  &.slide-next {
    right: -24px;
  }

  svg {
    height: 24px;
    width: 24px;
    display: block;
    fill: #333333;
  }
`;

export const NavigationArrow = ({ onClick, isPrev }) => {
  return (
    <NavigationArrowButton
      {...{ onClick }}
      className={`slide-${isPrev ? "prev" : "next"} `}
      type="button"
    >
      {isPrev ? <ChevronLeft /> : <ChevronRight />}
    </NavigationArrowButton>
  );
};

NavigationArrow.propTypes = {
  onClick: PropTypes.func,
  isPrev: PropTypes.bool,
};

NavigationArrow.defaultProps = {
  isPrev: false,
  onClick: null,
};
