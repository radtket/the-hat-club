import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const FilterNavItem = ({ tag, setTag, label, tagName }) => (
  <button
    className={clsx(tag === tagName && "active")}
    onClick={() => setTag(tagName)}
    type="button"
  >
    {label || tagName}
  </button>
);

FilterNavItem.propTypes = {
  tag: PropTypes.string.isRequired,
  setTag: PropTypes.func.isRequired,
  label: PropTypes.string,
  tagName: PropTypes.string.isRequired,
};

FilterNavItem.defaultProps = {
  label: null,
};

export default FilterNavItem;
