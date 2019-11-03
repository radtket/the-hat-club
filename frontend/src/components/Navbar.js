import React, { useState } from "react";
import { CartIcon, SearchIcon } from "./Icons";
import MenuOverlay from "./MenuOverlay";
import NavbarStyles from "../styles/NavbarStyles";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <NavbarStyles
        {...{ isMenuOpen }}
        className={`navbar ${isMenuOpen ? "is-active" : ""}`}
      >
        <div className="navbar__inner container">
          <nav>
            <button className="svg-button" type="button">
              <SearchIcon />
            </button>
            <button className="svg-button" type="button">
              <CartIcon />
            </button>
            <button
              className="menu-wrapper"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
              type="button"
            >
              <span className="hamburger-menu" />
            </button>
          </nav>
        </div>
      </NavbarStyles>
      <MenuOverlay {...{ isMenuOpen }} />
    </>
  );
};

export default Navbar;
