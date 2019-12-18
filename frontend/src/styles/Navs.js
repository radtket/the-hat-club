import styled from "styled-components";
import { position, size, margin, padding } from "polished";
import { gray, red, white } from "../utils/colors";

export const StyledNavbar = styled.header`
  ${padding(({ isCompact }) => (isCompact ? "12px" : "6px"), null)}
  ${position("fixed", 0, null, null, 0)}
  background: ${({ isCompact }) => (isCompact ? white : gray[800])};
  transition-duration: 0.5s;
  transition-property: background, padding;
  width: 100%;
  z-index: 10;

  .logo {
    svg {
      ${position("absolute", null, null, null, "50%")}
      ${size("100%", "124px")}
      fill: ${({ isCompact }) => (isCompact ? gray[800] : white)};
      margin-left: ${124 * -0.5}px;
      transition: fill 0.5s;
    }
  }


  nav {
    display: flex;
    justify-content: space-between;

    a,
    button {
      color: ${({ isCompact }) => (isCompact ? gray[500] : white)};
      display: inline-block;
      font-size: 18px;
      line-height: 1;
      padding: 16px 14px;
      text-decoration: none;
      transition: color 0.2s ease;
      vertical-align: bottom;

      &:hover {
        color: ${({ isCompact }) => (isCompact ? gray[800] : red[400])};

        svg {
          fill: ${({ isCompact }) => (isCompact ? gray[800] : red[400])};
        }
      }
    }

    svg {
      display: block;
      fill: ${({ isCompact }) => (isCompact ? gray[500] : white)};
      height: 18px;
      transition: fill 0.2s ease;
    }
  }
`;

export const StyledProduceShareSocial = styled.div`
  ${margin("24px", null, "36px")}

  button,
  > .divider {
    ${padding("4px", null)}
  }

  .divider {
    ${margin(null, "12px")}
    position: relative;

    &::after {
      ${position("absolute", 0, null, null, 0)};
      ${size("100%", "1px")}
      background: ${gray[300]};
      content: "";
    }
  }

  > div {
    display: inline-block;
    margin-right: 6px;
  }
`;

export const StyledFilterNav = styled.nav`
  ${padding("12px", null)}
  line-height: 18px;

  button {
    color: ${gray[800]};
    display: inline-block;
    font-family: "Maisonneue Bold";
    font-size: 20px;
    margin: 0 12px;
    position: relative;
    vertical-align: middle;

    &.active {
      color: ${red[400]};
    }

    &:first-of-type {
      margin-left: 0;
    }
  }

  span {
    color: ${gray[300]};
    font-size: 14px;
  }
`;

export const StyledPagination = styled.div`
  align-content: center;
  align-items: stretch;
  border: 1px solid ${gray[300]};
  border-radius: 10px;
  display: inline-flex;
  justify-content: center;
  margin: 2rem 0;
  text-align: center;

  & > * {
    border-right: 1px solid ${gray[300]};
    margin: 0;
    padding: 15px 30px;

    &:last-child {
      border-right: 0;
    }
  }

  a[aria-disabled="true"] {
    color: grey;
    pointer-events: none;
  }
`;

export const StyledImageNav = styled.nav`
  ${position("absolute", 0, null, null, 0)}
  ${size("100%", "70px")}
`;

export const StyledImageNavItem = styled.button`
  ${size("auto", "70px")}
  display: block;
  margin: 12px 0;
  padding: 0;
  transition: 0.5s;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.2)};

  &::before {
    display: none;
  }

  &:focus {
    outline: 0;
  }

  img {
    display: block;
    height: auto;
  }
`;
