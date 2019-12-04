import React, { useRef, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import PropTypes from "prop-types";
import ImageNav from "./ImageNav";
import NavigationArrow from "./NavigationArrow";
import { ChevronRight, ChevronLeft } from "../Icons";
import ProductSlide from "./ProductSlide";
import { isArrayEmpty } from "../../utils/helpers";

const ProductSliderStyles = styled(Slider)`
  margin-left: 100px;

  &:hover {
    .slick-arrow {
      opacity: 1;

      &.slick-prev {
        left: 20px;
      }

      &.slick-next {
        right: 20px;
      }
    }
  }

  .slick-arrow {
    opacity: 0;

    &.slick-prev,
    &.slick-next {
      color: #999;
      cursor: pointer;
      font-size: 24px;
      height: 24px;
      width: 24px;
      font-weight: 700;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      transition: 0.5s;
      z-index: 99;

      &:before {
        display: none;
      }

      svg {
        height: 24px;
        width: 24px;
        display: block;
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
            <li
              key={largeImage}
              style={{
                opacity: i === slideIndex ? 1 : 0.2,
              }}
            >
              <button onClick={() => ref.current.slickGoTo(i)} type="button">
                <img alt={title} src={image} />
              </button>
            </li>
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
          nextArrow: (
            <NavigationArrow>
              <ChevronRight />
            </NavigationArrow>
          ),
          prevArrow: (
            <NavigationArrow>
              <ChevronLeft />
            </NavigationArrow>
          ),
          beforeChange: (current, next) => {
            setSlideIndex(next);
          },
        }}
      >
        {images.map(({ image, largeImage }, i) => {
          return (
            <ProductSlide key={image} alt={`${title} #${i}`} src={largeImage} />
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
