import styled from "styled-components";
import { position, size } from "polished";
import { white, black } from "../utils/colors";

const barWidth = "20px";
const barHeight = "1px";
const barSpacing = "6px";

const NavbarStyles = styled.header`
  ${position("absolute", 0, null, null, 0)};
  background-color: ${({ isMenuOpen }) => (isMenuOpen ? "transparent" : black)};
  transition: background-color 700ms cubic-bezier(0.8, 0, 0.55, 0.94);
  transition-delay: 700ms;
  width: 100%;
  z-index: 4;

  &.is-active {
    .svg-button {
      transition: visibility 0;
      visibility: hidden;

      svg {
        opacity: 0;
      }
    }

    .hamburger-menu {
      background: transparent;

      &::after {
        top: 0;
        transform: rotate(45deg);
        transition: top 700ms cubic-bezier(0.23, 1, 0.32, 1),
          transform 700ms 700ms cubic-bezier(0.23, 1, 0.32, 1);
      }

      &::before {
        bottom: 0;
        transform: rotate(-45deg);
        transition: bottom 700ms cubic-bezier(0.23, 1, 0.32, 1),
          transform 700ms 700ms cubic-bezier(0.23, 1, 0.32, 1);
      }
    }
  }

  .navbar__logo {
    align-items: center;
    display: flex;

    svg {
      display: block;
      height: 40px;
      fill: ${white};
    }
  }

  .navbar__inner {
    display: flex;
    height: 80px;
    justify-content: space-between;

    > nav {
      ${size("100%")}
      align-items: center;
      display: flex;
      justify-content: flex-end;
    }
  }

  button {
    background: transparent;
    border: 0;
    border-radius: 0;
    padding: ${({ theme }) => theme.theme.spacing.small};

    &.svg-button {
      transition: visibility 700ms cubic-bezier(0.8, 0, 0.55, 0.94) 1400ms;
      visibility: visible;

      svg {
        display: block;
        fill: ${white};
        height: 18px;
        opacity: 1;
        transition: opacity 700ms cubic-bezier(0.8, 0, 0.55, 0.94) 700ms;
      }
    }
  }

  .menu-wrapper {
    cursor: pointer;
    min-height: 42px;
  }

  .hamburger-menu {
    ${size(barHeight, barWidth)}
    display: block;
    background: ${white};
    position: relative;
    transition: all 0ms 700ms;

    &::before,
    &::after {
      ${position("absolute", null, null, null, 0)}
      ${size(barHeight, barWidth)}
      background: ${white};
      content: "";
      display: block;
    }

    &::before {
      bottom: ${barSpacing};
      transition: bottom 700ms 700ms cubic-bezier(0.23, 1, 0.32, 1),
        transform 700ms cubic-bezier(0.23, 1, 0.32, 1);
    }

    &::after {
      top: ${barSpacing};
      transition: top 700ms 700ms cubic-bezier(0.23, 1, 0.32, 1),
        transform 700ms cubic-bezier(0.23, 1, 0.32, 1);
    }
  }
`;

export default NavbarStyles;
