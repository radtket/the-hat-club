import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { SearchIcon } from "./Icons";
import MenuOverlay from "./MenuOverlay";
import NavbarStyles from "../styles/NavbarStyles";
import Cart from "./Cart";
import { LogoTextPadding } from "./Branding";
import CartToggleButton from "./Cart/CartToggleButton";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <NavbarStyles
        {...{ isMenuOpen }}
        className={`navbar ${isMenuOpen ? "is-active" : ""}`}
      >
        <div className="navbar__inner container">
          <NavLink className="navbar__logo" to="/">
            <LogoTextPadding />
          </NavLink>

          <nav>
            <button className="svg-button" type="button">
              <SearchIcon />
            </button>
            <CartToggleButton />
            <button className="menu-wrapper" onClick={toggleMenu} type="button">
              <span className="hamburger-menu" />
            </button>
          </nav>
        </div>
      </NavbarStyles>
      <Cart />
      <MenuOverlay {...{ isMenuOpen, toggleMenu }} />
    </>
  );
};

export default Navbar;
