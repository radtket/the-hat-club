import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { position, padding, size } from "polished";
import styled from "styled-components";
import Slide from "./Slide";

// Images
import MLB from "../../assets/images/slider-mlb.jpg";
import NFL from "../../assets/images/slider-nfl.jpg";
import MILLB from "../../assets/images/slider-miilb.jpg";
import NewArivals from "../../assets/images/slider-new-arivals.jpg";
import {
  NavigationArrow,
  NavigationArrowButton,
} from "../SingleProductSlider/NavigationArrow";
import { white, red, black } from "../../utils/colors";
import { rgba } from "../../utils/helpers";

const HomeSliderStyles = styled(Slider)`
  /* overflow: hidden; */
  ${padding("24px", "44px")}
  margin: 0 auto;
  max-width: 1750px;
  position: relative;
  text-align: center;

  &:hover {
    ${NavigationArrowButton} {
      opacity: 1;

      &.slide-prev {
        left: 0;
      }

      &.slide-next {
        right: 0;
      }
    }
  }

  img {
    box-shadow: ${rgba(black, 0.3)} 0px 10px 20px 0px;
    border-radius: 6px;
  }

  .slick-dots {
    ${position("absolute", null, null, "96px", "15%")}
    display: inline-block !important;
    background: ${red[400]};
    z-index: 7;
    padding: 12px;
    width: auto;

    li {
      ${size("unset")}
      position: relative;
      display: inline-block;
      zoom: 1;
      *display: inline;
      vertical-align: middle;
      margin: 0 6px;

      button {
        ${size("6px")}
        display: block;
        margin: 0;
        padding: 0;
        border: 0 none;
        border-radius: 30px;
        text-indent: -1000em;
        overflow: hidden;
        box-sizing: content-box;
        background-color: ${red[100]};

        &::before {
          display: none;
        }
      }

      &.slick-active {
        button {
          ${size("10px")}
          border: 2px solid ${white};
          background: none;
        }
      }
    }
  }
`;

const HomeSlider = () => {
  return (
    <HomeSliderStyles
      {...{
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NavigationArrow size="36px" />,
        prevArrow: <NavigationArrow isPrev size="36px" />,
      }}
    >
      <Slide
        cta={<Link to="/">Shop Now</Link>}
        img={<img alt="MLB" src={MLB} />}
        title="MLB Collection"
      />
      <Slide
        cta={<Link to="/">Shop Now</Link>}
        img={<img alt="NFL" src={NFL} />}
        title="NFL Collection"
      />
      <Slide
        cta={<Link to="/">Shop Now</Link>}
        img={<img alt="NewArivals" src={NewArivals} />}
        title="New Arivals"
      />
      <Slide
        cta={<Link to="/">Shop Now</Link>}
        img={<img alt="MILLB" src={MILLB} />}
        title="MILLB Collection"
      />
    </HomeSliderStyles>
  );
};

export default HomeSlider;
