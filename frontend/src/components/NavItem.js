import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ setIsHovering, to, name }) => {
  return (
    <>
      <NavLink
        className="link"
        exact
        onMouseEnter={() => {
          setIsHovering(true);
        }}
        onMouseLeave={() => {
          setIsHovering(false);
        }}
        strict
        to={to}
      >
        <span>{name}</span>
      </NavLink>
      <br />
    </>
  );
};

export default NavItem;
