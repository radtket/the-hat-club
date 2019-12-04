import React from "react";
import PropTypes from "prop-types";

const NavigationArrow = ({ children, currentSlide, slideCount, ...props }) => {
  return (
    <button {...props} type="button">
      {children}
    </button>
  );
};

NavigationArrow.propTypes = {
  children: PropTypes.node.isRequired,
  currentSlide: PropTypes.number,
  slideCount: PropTypes.number,
};

NavigationArrow.defaultProps = {
  currentSlide: 0,
  slideCount: 0,
};

export default NavigationArrow;
