import React from "react";
import styled from "styled-components";
import { position, size } from "polished";

const SlideWrap = styled.figure`
  position: relative;
  display: inline-block;
  margin: 32px;
  color: #fff;

  figcaption {
    display: block;
    ${position("absolute", null, "20%", "32px", null)};
    z-index: 7;
    background: #ee5050;
    padding: 32px;
    letter-spacing: -1.25px;
    text-align: left;

    h1 {
      font-size: 42px;
      line-height: 1;
      font-family: "Maisonneue Bold";
      margin: 0;
      margin-bottom: 6px;
    }

    a {
      font-size: 18px;
      position: relative;
      display: inline-block;
      color: #fff;
      padding: 6px 3px 0;
      text-indent: -2px;
      transition: color 0.3s;

      &:hover {
        color: rgba(255, 255, 255, 0.88);

        &::before {
          width: 100%;
        }
      }

      &::before {
        content: "";
        ${position("absolute", "0", null, null, 0)};
        width: 40%;
        height: 2px;
        background: #cf3a3a;
        transition: width 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
    }
  }

  .square-solid {
    ${size("100%")}
    background: #ee5050;
    content: "";
    ${position("absolute", "32px", "32px", null, null)};
    z-index: 2;
  }

  .square-outline {
    ${size("100%")}
    border: 6px solid #ee5050;
    content: "";
    ${position("absolute", null, null, "32px", "32px")};
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

export default Slide;
