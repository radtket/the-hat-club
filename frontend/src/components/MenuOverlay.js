import React, { useState } from "react";
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
        <li
          className="link active-page"
          data-link="work"
          onMouseEnter={() => {
            setIsHovering(true);
          }}
          onMouseLeave={() => {
            setIsHovering(false);
          }}
        >
          <a href="/">Store</a>
        </li>
        <br />
        <li
          className="link "
          data-link="about"
          onMouseEnter={() => {
            setIsHovering(true);
          }}
          onMouseLeave={() => {
            setIsHovering(false);
          }}
        >
          <a href="/about">Sell</a>
        </li>
        <br />
        <li
          className="link "
          data-link="labs"
          onMouseEnter={() => {
            setIsHovering(true);
          }}
          onMouseLeave={() => {
            setIsHovering(false);
          }}
        >
          <a href="/labs">Account</a>
        </li>
        <br />
        <li
          className="link "
          data-link="labs"
          onMouseEnter={() => {
            setIsHovering(true);
          }}
          onMouseLeave={() => {
            setIsHovering(false);
          }}
        >
          <a href="/labs">Cart</a>
        </li>
      </ul>
    </MenuStyles>
  );
};

export default MenuOverlay;
