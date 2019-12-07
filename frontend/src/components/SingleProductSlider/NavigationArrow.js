import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ChevronRight, ChevronLeft } from "../Icons";

export const NavigationArrowButton = styled.button`
  height: ${({ size }) => `${size}`};
  opacity: 0;
  outline: none;
  padding: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.5s;
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
    display: block;
    fill: #333;
    height: ${({ size }) => `${size}`};
  }
`;

export const NavigationArrow = ({ onClick, isPrev, size }) => {
  return (
    <NavigationArrowButton
      {...{ onClick, size }}
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
  size: PropTypes.string,
};

NavigationArrow.defaultProps = {
  isPrev: false,
  onClick: null,
  size: "24px",
};
