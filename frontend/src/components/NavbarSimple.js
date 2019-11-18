import React, { useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useWindowScroll } from "react-use";
import { position, padding, size } from "polished";
import { HatClubLogo } from "./Branding";
import { AccountIcon, CartIcon } from "./Icons";

const Navbar = styled.header`
  ${padding(({ isCompact }) => (isCompact ? "12px" : "6px"), null)}
  ${position("fixed", 0, null, null, 0)}
  width: 100%;
  z-index: 99;
  background: ${({ isCompact }) => (isCompact ? "#fff" : "#23262B")};
  transition-property: background, padding;
  transition-duration: 0.5s;
  /* border-bottom: 1px solid #eee; */

  svg.logo {
    ${position("absolute", null, null, null, "50%")}
    ${size("100%", "124px")}
    margin-left: ${124 * -0.5}px;
    fill: ${({ isCompact }) => (isCompact ? "#23262B" : "#fff")};
    transition: fill 0.5s;
  }

  nav {
    display: flex;
    justify-content: space-between;

    a {
      padding: 16px 14px;
      display: inline-block;
      font-size: 18px;
      line-height: 1;
      color: ${({ isCompact }) => (isCompact ? "#707070" : "#fff")};
      vertical-align: bottom;
      text-decoration: none;
      transition: color 0.2s ease;

      &:hover {
        color: ${({ isCompact }) => (isCompact ? "#282828" : "#ee5050")};
        svg {
          fill: ${({ isCompact }) => (isCompact ? "#282828" : "#ee5050")};
        }
      }
    }

    svg {
      display: block;
      height: 18px;
      fill: ${({ isCompact }) => (isCompact ? "#707070" : "#fff")};
      transition: fill 0.2s ease;
    }
  }
`;

const NavbarSimple = () => {
  const scrollRef = useRef(null);
  const { y } = useWindowScroll();

  return (
    <Navbar isCompact={y <= 100}>
      <div ref={scrollRef} className="container">
        <HatClubLogo className="logo" />
        <nav>
          <div>
            <Link to="/">Shop</Link>
            <Link to="/sell">Sell</Link>
          </div>
          <div>
            <Link to="/">
              <AccountIcon />
            </Link>
            <Link to="/">
              <CartIcon />
            </Link>
            {/* <Link to="/">Sign In</Link>
            <Link to="/">Cart</Link> */}
          </div>
        </nav>
      </div>
    </Navbar>
  );
};

export default NavbarSimple;
