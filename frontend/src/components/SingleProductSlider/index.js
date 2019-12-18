import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { StyledImageNav, StyledImageNavItem } from "../../styles/Navs";
import NavigationArrow from "./NavigationArrow";
import ProductSlide from "./ProductSlide";
import { isArrayEmpty } from "../../utils/helpers";
import { StyledProductSlider } from "../../styles/Sliders";

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
      <StyledImageNav>
        {images.map(({ image, largeImage }, i) => {
          return (
            <StyledImageNavItem
              key={largeImage}
              isActive={i === slideIndex}
              onClick={() => ref.current.slickGoTo(i)}
              type="button"
            >
              <img alt={title} src={image} />
            </StyledImageNavItem>
          );
        })}
      </StyledImageNav>
      <StyledProductSlider
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
      </StyledProductSlider>
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
