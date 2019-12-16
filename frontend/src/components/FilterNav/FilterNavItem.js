import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const FilterNavItem = ({ onClick, label, isActive }) => (
  <button className={clsx(isActive && "active")} {...{ onClick }} type="button">
    {label}
  </button>
);

FilterNavItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default FilterNavItem;
