import React from "react";
import PropTypes from "prop-types";
import ReactImageMagnify from "react-image-magnify";
import styled from "styled-components";

const ProductSlideStyles = styled.button`
  display: block;
  margin: auto;
  img {
    max-width: unset;
  }
`;

const ProductSlide = ({ alt, image, largeImage }) => {
  return (
    <ProductSlideStyles type="button">
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
    </ProductSlideStyles>
  );
};

ProductSlide.propTypes = {
  alt: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
};

export default ProductSlide;
