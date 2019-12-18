import React from "react";
import PropTypes from "prop-types";
import {
  StyledSquareSolid,
  StyledSlideWrap,
  StyledSquareOutline,
} from "../../styles/Sliders";

const Slide = ({ title, cta, img }) => {
  return (
    <StyledSlideWrap>
      <StyledSquareSolid />
      {img}
      <StyledSquareOutline />
      <figcaption>
        <h1>{title}</h1>
        {cta}
      </figcaption>
    </StyledSlideWrap>
  );
};

Slide.propTypes = {
  title: PropTypes.string.isRequired,
  cta: PropTypes.node.isRequired,
  img: PropTypes.node.isRequired,
};

export default Slide;
