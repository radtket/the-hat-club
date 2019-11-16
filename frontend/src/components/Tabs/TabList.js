import React from "react";
import PropTypes from "prop-types";

const TabList = ({ children, ...restProps }) => {
  return <nav {...restProps}>{children}</nav>;
};

TabList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TabList;
