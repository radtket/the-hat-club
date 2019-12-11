import React, { useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useWindowScroll } from "react-use";
import { position, padding, size } from "polished";
import { useQuery } from "react-apollo";
import { HatClubLogo } from "./Branding";
import CartToggleButton from "./Cart/CartToggleButton";
import AccountButton from "./AccountButton";
import { CURRENT_USER_QUERY } from "../reslovers/Query";
import CartCount from "./Cart/CartCount";
import { CartIcon } from "./Icons";
import { gray, white, red } from "../utils/colors";

const Header = styled.header`
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

const Navbar = () => {
  const { data } = useQuery(CURRENT_USER_QUERY);
  const scrollRef = useRef(null);
  const { y } = useWindowScroll();

  return (
    <Header isCompact={y <= 100}>
      <div ref={scrollRef} className="container">
        <Link className="logo" to="/">
          <HatClubLogo />
        </Link>
        <nav>
          <div>
            <Link to="/">Shop</Link>
            <Link to="/sell">Sell</Link>
          </div>
          <div>
            <AccountButton {...data} />
            <CartToggleButton
              style={{
                position: "relative",
              }}
            >
              <CartCount />
              <CartIcon />
            </CartToggleButton>
          </div>
        </nav>
      </div>
    </Header>
  );
};

export default Navbar;
