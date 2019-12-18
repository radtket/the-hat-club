import React from "react";
import PropTypes from "prop-types";
import ReactImageMagnify from "react-image-magnify";
import { StyledProductSlide } from "../../styles/Sliders";

const ProductSlide = ({ alt, image, largeImage }) => {
  return (
    <StyledProductSlide type="button">
      <figure>
        <ReactImageMagnify
          {...{
            isHintEnabled: true,
            enlargedImagePosition: "over",
            smallImage: {
              alt,
              isFluidWidth: true,
              src: image,
            },
            largeImage: {
              src: largeImage || image,
              width: 1000,
              height: 1000,
            },
          }}
        />
      </figure>
    </StyledProductSlide>
  );
};

ProductSlide.propTypes = {
  alt: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
};

export default ProductSlide;
