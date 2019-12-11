import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { position, size } from "polished";
import { red, white } from "../../utils/colors";
import { rgba } from "../../utils/helpers";

const SquareSolid = styled.div`
  ${position("absolute", "32px", "32px", null, null)};
  ${size("100%")}
  background: ${red[400]};
  content: "";
  z-index: 2;
`;

const SquareOutline = styled.div`
  ${position("absolute", null, null, "32px", "32px")};
  ${size("100%")}
  border: 6px solid ${red[400]};
  content: "";
  z-index: 4;
`;

const SlideWrap = styled.figure`
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

const Slide = ({ title, cta, img }) => {
  return (
    <SlideWrap>
      <SquareSolid />
      {img}
      <SquareOutline />
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
