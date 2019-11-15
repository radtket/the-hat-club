import React, { useState } from "react";
import MenuStyles from "../styles/MenuStyles";
import User from "./User";
import NavItem from "./NavItem";

const MenuOverlay = ({ isMenuOpen, toggleMenu }) => {
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
        <NavItem name="Store" to="/" {...{ setIsHovering, toggleMenu }} />
        <User {...{ setIsHovering, toggleMenu }} />
      </ul>
    </MenuStyles>
  );
};

export default MenuOverlay;
