import React, { useRef, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import PropTypes from "prop-types";
import { ImageNav, ImageNavItem } from "./styles";
import { NavigationArrow, NavigationArrowButton } from "./NavigationArrow";
import ProductSlide from "./ProductSlide";
import { isArrayEmpty } from "../../utils/helpers";

const ProductSliderStyles = styled(Slider)`
  margin-left: 100px;

  &:hover {
    ${NavigationArrowButton} {
      opacity: 1;

      &.slide-prev {
        left: 24px;
      }

      &.slide-next {
        right: 24px;
      }
    }
  }
`;

const SingleProductSlider = ({ images, title }) => {
  const ref = useRef();
  const [slideIndex, setSlideIndex] = useState(0);

  if (isArrayEmpty(images)) {
    return null;
  }

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <ImageNav>
        {images.map(({ image, largeImage }, i) => {
          return (
            <ImageNavItem
              key={largeImage}
              isActive={i === slideIndex}
              onClick={() => ref.current.slickGoTo(i)}
              type="button"
            >
              <img alt={title} src={image} />
            </ImageNavItem>
          );
        })}
      </ImageNav>
      <ProductSliderStyles
        {...{
          ref,
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <NavigationArrow />,
          prevArrow: <NavigationArrow isPrev />,
          beforeChange: (current, next) => {
            setSlideIndex(next);
          },
        }}
      >
        {images.map(({ image, largeImage }, i) => {
          return (
            <ProductSlide
              key={image}
              {...{ image, largeImage }}
              alt={`${title} #${i}`}
            />
          );
        })}
      </ProductSliderStyles>
    </div>
  );
};

SingleProductSlider.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      largeImage: PropTypes.string,
    })
  ),
  title: PropTypes.string.isRequired,
};

SingleProductSlider.defaultProps = {
  images: [],
};

export default SingleProductSlider;
