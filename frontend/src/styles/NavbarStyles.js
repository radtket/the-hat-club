import styled from "styled-components";

const barWidth = "20px";
const barHeight = "1px";
const barSpacing = "6px";

const NavbarStyles = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ isMenuOpen }) =>
    isMenuOpen ? "transparent" : "blue"};
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

  .navbar__inner {
    display: flex;
    height: 80px;
    justify-content: flex-end;

    > nav {
      align-items: center;
      display: flex;
      height: 100%;
    }
  }

  button {
    padding: ${({ theme }) => theme.smallSpacing};
    background: transparent;
    border: 0;
    border-radius: 0;

    &.svg-button {
      visibility: visible;
      transition: visibility 700ms cubic-bezier(0.8, 0, 0.55, 0.94) 1400ms;
      svg {
        display: block;
        fill: red;
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
    background: red;
    position: relative;
    transition: all 0ms 700ms;
    display: block;
    width: ${barWidth};
    height: ${barHeight};

    &::before {
      display: block;
      width: ${barWidth};
      height: ${barHeight};
      background: red;
      bottom: ${barSpacing};
      content: "";
      left: 0;
      position: absolute;
      transition: bottom 700ms 700ms cubic-bezier(0.23, 1, 0.32, 1),
        transform 700ms cubic-bezier(0.23, 1, 0.32, 1);
    }

    &::after {
      display: block;
      width: ${barWidth};
      height: ${barHeight};
      background: red;
      content: "";
      left: 0;
      position: absolute;
      top: ${barSpacing};
      transition: top 700ms 700ms cubic-bezier(0.23, 1, 0.32, 1),
        transform 700ms cubic-bezier(0.23, 1, 0.32, 1);
    }
  }
`;

export default NavbarStyles;
