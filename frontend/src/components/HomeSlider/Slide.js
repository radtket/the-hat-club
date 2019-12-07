import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { position, size } from "polished";

const SlideWrap = styled.figure`
  color: #fff;
  display: inline-block;
  margin: 32px;
  position: relative;

  figcaption {
    ${position("absolute", null, "20%", "32px", null)};
    background: #ee5050;
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
      color: #fff;
      display: inline-block;
      font-size: 18px;
      padding: 6px 3px 0;
      position: relative;
      text-indent: -2px;
      transition: color 0.3s;

      &:hover {
        color: rgba(255, 255, 255, 0.88);

        &::before {
          width: 100%;
        }
      }

      &::before {
        ${position("absolute", "0", null, null, 0)};
        ${size("2px", "40%")}
        content: "";
        background: #cf3a3a;
        transition: width 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
    }
  }

  .square-solid {
    ${position("absolute", "32px", "32px", null, null)};
    ${size("100%")}
    background: #ee5050;
    content: "";
    z-index: 2;
  }

  .square-outline {
    ${position("absolute", null, null, "32px", "32px")};
    ${size("100%")}
    border: 6px solid #ee5050;
    content: "";
    z-index: 4;
  }

  img {
    display: block;
    margin: auto;
    position: relative;
    z-index: 3;
  }
`;

const Slide = ({ title, cta, img }) => {
  return (
    <SlideWrap>
      <div className="square-solid" />
      {img}
      <div className="square-outline" />
      <figcaption>
        <h1>{title}</h1>
        {cta}
      </figcaption>
    </SlideWrap>
  );
};

Slide.propTypes = {
  title: PropTypes.string.isRequired,
  cta: PropTypes.node.isRequired,
  img: PropTypes.node.isRequired,
};

export default Slide;
