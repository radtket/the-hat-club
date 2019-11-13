import React from "react";

const TabList = ({ children, ...restProps }) => {
  return <nav {...restProps}>{children}</nav>;
};

export default TabList;
