import Slider from "react-slick";
import styled from "styled-components";
import { position, padding, size } from "polished";
import { rgba } from "../utils/helpers";
import { white, red, black } from "../utils/colors";
import { StyledNavigationArrowButton } from "./Buttons";

export const StyledHomeSlider = styled(Slider)`
  /* overflow: hidden; */
  ${padding("24px", "44px")}
  margin: 0 auto;
  max-width: 1750px;
  position: relative;
  text-align: center;

  &:hover {
    ${StyledNavigationArrowButton} {
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
        background-color: ${red[100]};
        border-radius: 30px;
        border: 0 none;
        box-sizing: content-box;
        display: block;
        margin: 0;
        overflow: hidden;
        padding: 0;
        text-indent: -1000em;

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

export const StyledSquareSolid = styled.div`
  ${position("absolute", "32px", "32px", null, null)};
  ${size("100%")}
  background: ${red[400]};
  content: "";
  z-index: 2;
`;

export const StyledSquareOutline = styled.div`
  ${position("absolute", null, null, "32px", "32px")};
  ${size("100%")}
  border: 6px solid ${red[400]};
  content: "";
  z-index: 4;
`;

export const StyledSlideWrap = styled.figure`
  color: ${white};
  display: inline-block;
  margin: 32px;
  position: relative;

  figcaption {
    ${position("absolute", null, "20%", "32px", null)};
    background: ${red[400]};
    display: block;
    letter-spacing: -1.25px;
    padding: 32px;
    text-align: left;
    z-index: 7;

    h1 {
      font-family: "Maisonneue Bold";
      font-size: 42px;
      line-height: 1;
      margin-bottom: 6px;
      margin: 0;
    }

    a {
      color: ${white};
      display: inline-block;
      font-size: 18px;
      padding: 6px 3px 0;
      position: relative;
      text-indent: -2px;
      transition: color 0.3s;

      &:hover {
        color: ${rgba(white, 0.88)};

        &::before {
          width: 100%;
        }
      }

      &::before {
        ${position("absolute", "0", null, null, 0)};
        ${size("2px", "40%")}
        content: "";
        background: ${red[300]};
        transition: width 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
    }
  }

  img {
    display: block;
    margin: auto;
    position: relative;
    z-index: 3;
  }
`;

export const StyledProductSlider = styled(Slider)`
  margin-left: 100px;

  &:hover {
    ${StyledNavigationArrowButton} {
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

export const StyledProductSlide = styled.button`
  display: block;
  margin: auto;

  img {
    max-width: unset;
  }
`;
