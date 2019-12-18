import styled from "styled-components";
import { margin, cover, size, position } from "polished";
import { white, gray, red } from "../utils/colors";
import { rgba } from "../utils/helpers";
import { MoveUpDown } from "./Animations";

export const StyledSingleItemSlideOutNav = styled.div`
  ${margin("48px", null)}
  position: relative;
  overflow: hidden;

  &:hover {
    > a {
      border-bottom-right-radius: 24px;
      border-bottom-left-radius: 24px;
      box-shadow: 0px 15px 10px -15px ${rgba(gray[400], 0.45)};
    }

    img {
      /* transform: translate3d(0, -6px, 0); */
      animation: ${MoveUpDown} 1.5s linear infinite;
    }

    figcaption {
      transform: translateY(-100%);
    }

    nav {
      bottom: -45px;
      box-shadow: 0px 15px 10px -15px ${gray[900]};
    }
  }

  img {
    backface-visibility: hidden;
    display: block;
    transition: 0.3s ease;
  }

  > a {
    background: ${white};
    display: block;
    overflow: hidden;
    position: relative;
    transition: border-radius 0.3s;
    z-index: 2;
  }

  figcaption {
    display: block;
    position: relative;
    transform: translateY(0);
    transition: transform 0.3s;
  }

  dl {
    color: ${gray[800]};
    font-size: 18px;
    margin: auto;
    max-width: 315px;
    text-align: center;

    dt {
      margin-bottom: 6px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    dd {
      font-family: "Maisonneue Bold";
      margin: 0;
    }
  }

  nav {
    background: ${gray[800]};
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
    bottom: 100%;
    display: flex;
    justify-content: space-around;
    padding: 36px 12px 12px;
    position: absolute;
    transition: bottom 0.3s;
    width: 100%;

    button {
      &:hover {
        svg {
          fill: ${red[400]};
        }
      }
    }

    svg {
      display: block;
      fill: ${white};
      height: 18px;
    }
  }
`;

export const StyledSingleItem = styled.figure`
  ${margin("48px", null)}

  &:hover {
    /* img {
      transform: translate3d(0, -6px, 0);
    } */

    figcaption {
      dt {
        transform: translateY(-100%);
      }

      dd {
        top: 0;

        > a {
          &::after {
            /* width: 100%; */
            opacity: 1;
            transform: scaleX(1);
          }
        }
      }
    }
  }

  > a {
    display: block;
    position: relative;

    &:hover {
      img {
        &:last-of-type {
          opacity: 1 !important;
        }
      }
    }

    img {
      backface-visibility: hidden;
      display: block;
      margin: 0;
      transition: 0.3s ease;

      &:last-of-type {
        ${cover()}
        opacity: 0;
        transition: 0.5s;
      }
    }
  }

  figcaption {
    color: ${gray[800]};
    margin: auto;
    max-width: 315px;
    text-align: center;

    h3,
    dl {
      font-size: 18px;
    }

    h3 {
      ${margin(0, null, "6px")}
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    dl {
      margin: 0 auto;
      overflow: hidden;
      position: relative;
    }

    dt {
      font-family: "Maisonneue Bold";
      transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    dd {
      ${position("absolute", "100%", null, null, 0)}
      font-size: 16px;
      line-height: 1.7;
      margin-left: 0;
      transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      width: 100%;

      > a {
        position: relative;
        color: ${gray[500]};

        &::after {
          ${position("absolute", null, null, "-2px", 0)}
          ${size("1px", "100%")}
          content: "";
          background: ${gray[500]};
          opacity: 0;
          transform: scaleX(0);
          /* transition: width 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.33s; */
          transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.33s,
            opacity 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.33s;
        }
      }
    }
  }
`;
