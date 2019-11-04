import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuStyles from "../styles/MenuStyles";

const MenuOverlay = ({ isMenuOpen }) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <MenuStyles
      className={`menu-overlay ${isMenuOpen ? "is-active" : ""} ${
        isHovering ? "has-hovered-link" : ""
      }`}
      data-active-link="home"
    >
      <ul className="menu-links">
        <div className="grid">
          <div className="column mobile" />
          <div className="column mobile" />
          <div className="column" />
          <div className="column" />
        </div>

        <NavLink
          className="link"
          data-link="work"
          exact
          onMouseEnter={() => {
            setIsHovering(true);
          }}
          onMouseLeave={() => {
            setIsHovering(false);
          }}
          strict
          to="/"
        >
          <span>Store</span>
        </NavLink>

        <br />

        <NavLink
          className="link"
          data-link="about"
          exact
          onMouseEnter={() => {
            setIsHovering(true);
          }}
          onMouseLeave={() => {
            setIsHovering(false);
          }}
          strict
          to="/sell"
        >
          <span>Sell</span>
        </NavLink>

        <br />

        <NavLink
          className="link"
          data-link="labs"
          exact
          onMouseEnter={() => {
            setIsHovering(true);
          }}
          onMouseLeave={() => {
            setIsHovering(false);
          }}
          strict
          to="/labs"
        >
          <span>Account</span>
        </NavLink>

        <br />

        <NavLink
          className="link"
          data-link="labs"
          exact
          onMouseEnter={() => {
            setIsHovering(true);
          }}
          onMouseLeave={() => {
            setIsHovering(false);
          }}
          strict
          to="/labs"
        >
          <span>Cart</span>
        </NavLink>
      </ul>
    </MenuStyles>
  );
};

export default MenuOverlay;
