import React from "react";
import { Link } from "react-router-dom";
import Slide from "./Slide";

// Images
import MLB from "../../assets/images/slider/slider-mlb.jpg";
import NFL from "../../assets/images/slider/slider-nfl.jpg";
import MILLB from "../../assets/images/slider/slider-miilb.jpg";
import NewArivals from "../../assets/images/slider/slider-new-arivals.jpg";
import NavigationArrow from "../SingleProductSlider/NavigationArrow";
import { StyledHomeSlider } from "../../styles/Sliders";

const HomeSlider = () => {
  return (
    <StyledHomeSlider
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
    </StyledHomeSlider>
  );
};

export default HomeSlider;
