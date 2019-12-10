import styled from "styled-components";
import { size, position } from "polished";

const MenuStyles = styled.div`
  ${size("100%")}
  ${position("fixed", 0, null, null, 0)}
  background-color: #000;
  opacity: 0;
  transform: translate3d(0, -100%, 0);
  transition: opacity 700ms step-end,
    transform 700ms cubic-bezier(0.8, 0, 0.55, 0.94), visibility 700ms step-end,
    background-color 700ms cubic-bezier(0.8, 0, 0.55, 0.94);
  visibility: hidden;
  z-index: 3;

  &.is-active {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition: opacity 700ms step-start,
      transform 700ms cubic-bezier(0.8, 0, 0.55, 0.94),
      visibility 700ms step-start,
      background-color 700ms cubic-bezier(0.8, 0, 0.55, 0.94);
    visibility: visible;

    .menu-links {
      opacity: 1;
      transition: opacity 700ms cubic-bezier(0.8, 0, 0.55, 0.94) 700ms;
    }
  }

  .grid {
    ${size("100%")}
    ${position("absolute", "-20vh", null, null, 0)}
    z-index: -1;
    display: flex;
    opacity: 0.18;
    transition: opacity 700ms cubic-bezier(0.8, 0, 0.55, 0.94);

    .column {
      border-left: 1px solid #616161;
      display: none;
      flex: 1;
      height: 110%;

      &:nth-child(2) {
        border-right: 1px solid #616161;
      }

      @media (min-width: 600px) {
        display: block;
      }

      &.mobile {
        display: block;

        &:nth-child(2) {
          border-left: 1px solid #616161;
          border-right: 0;
        }
      }
    }
  }

  .menu-links {
    font-size: 18vmin;
    font-weight: 400;
    height: 100%;
    letter-spacing: -0.03em;
    line-height: 1.05em;
    list-style: none;
    margin: 22vmin auto;
    opacity: 0;
    padding-left: 0;
    padding-top: 65px;
    position: relative;
    transition: opacity 400ms cubic-bezier(0.8, 0, 0.55, 0.94);
    width: 85%;

    @media all and(min-width: 600px) {
      margin: 20vmin auto;
    }

    @media (min-width: 1024px) {
      font-size: 14vmin;
      margin-top: 14vmin;
      width: 90%;
    }

    @media all and(min-width: 1280px) {
      font-size: 13.5vmin;
    }
  }

  .menu-icons-row {
    display: block;
    margin-top: 40px;
    height: auto;

    .menu-icon {
      @include size(18px);
      display: inline-block;
      margin-right: 12px;
      opacity: 1;
      transition: opacity 0.25s cubic-bezier(0.8, 0, 0.55, 0.94);

      &:hover {
        opacity: 0.3;
      }
    }

    .icon-instagram {
      margin-top: 2px;
    }

    .icon-mail {
      margin-top: 2px;
    }

    .icon-dribbble {
      margin-top: 2px;
    }
  }

  .link {
    color: #fff;
    cursor: pointer;
    display: inline-block;
    margin-top: 0;
    transition: text-shadow 400ms cubic-bezier(0.8, 0, 0.55, 0.94),
      color 400ms cubic-bezier(0.8, 0, 0.55, 0.94);
    user-select: none;

    &.active {
      color: #000;
      text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
        1px 1px 0 #fff;
    }

    span {
      background-color: transparent;
      color: inherit;
      line-height: 0.6;
      text-decoration: none;
      transition: none;
    }
  }

  &.has-hovered-link {
    .link {
      color: rgba(255, 255, 255, 0.1);

      &.active {
        color: #000;
        text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
          1px 1px 0 #fff;
      }

      &:hover {
        color: #fff;
        text-shadow: none;
      }
    }
  }
`;

export default MenuStyles;
