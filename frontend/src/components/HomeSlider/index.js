import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Slide from "./Slide";

// Images
import MLB from "../../assets/images/slider-mlb.jpg";
import NFL from "../../assets/images/slider-nfl.jpg";
import MILLB from "../../assets/images/slider-miilb.jpg";
import NewArivals from "../../assets/images/slider-new-arivals.jpg";

const HomeSliderStyles = styled(Slider)`
  padding-top: 24px;
  padding-bottom: 24px;
  text-align: center;

  img {
    box-shadow: 0 0.5em 1em 0 rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }

  .slick-dots {
    display: inline-block !important;
    background: #ee5050;
    position: absolute;
    left: 15%;
    bottom: 96px;
    z-index: 1000;
    padding: 12px;
    width: auto;

    li {
      position: relative;
      display: inline-block;
      zoom: 1;
      *display: inline;
      vertical-align: middle;
      margin: 0 6px;
      width: unset;
      height: unset;

      button {
        display: block;
        width: 6px;
        height: 6px;
        margin: 0;
        padding: 0;
        border: 0 none;
        border-radius: 30px;
        text-indent: -1000em;
        overflow: hidden;
        box-sizing: content-box;
        background-color: #a02727;

        &::before {
          display: none;
        }
      }

      &.slick-active {
        button {
          width: 10px;
          height: 10px;
          border: 2px solid #fff;
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