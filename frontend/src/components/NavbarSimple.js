import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { HatClubLogo } from "./Branding";

const Navbar = styled.header`
  padding-top: 12px;
  padding-bottom: 12px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 99;
  background: #fff;
  /* border-bottom: 1px solid #eee; */

  svg {
    position: absolute;
    width: 124px;
    height: 100%;
    left: 50%;
    margin-left: -62px;
  }

  nav {
    display: flex;
    justify-content: space-between;

    a {
      padding: 16px 12px;
      display: inline-block;
      font-size: 16px;
      line-height: 1;
      color: #707070;
      vertical-align: bottom;
      text-decoration: none;
    }
  }
`;

const NavbarSimple = () => {
  return (
    <Navbar>
      <div className="container">
        <HatClubLogo />
        <nav>
          <div>
            <Link to="/">Shop</Link>
            <Link to="/sell">Sell</Link>
          </div>
          <div>
            <Link to="/">Sign In</Link>
            <Link to="/">Cart</Link>
          </div>
        </nav>
      </div>
    </Navbar>
  );
};

export default NavbarSimple;
