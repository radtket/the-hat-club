import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const NavItem = ({ setIsHovering, toggleMenu, to, name }) => {
  return (
    <>
      <NavLink
        className="link"
        exact
        onClick={toggleMenu}
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

NavItem.propTypes = {
  setIsHovering: PropTypes.func.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  to: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default NavItem;
