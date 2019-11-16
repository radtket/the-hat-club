import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const TabContext = createContext();

const Tabs = ({ initialValue, children, ...restProps }) => {
  const [activeTab, changeTab] = useState(initialValue);

  return (
    <TabContext.Provider value={{ activeTab, changeTab }}>
      <div {...restProps}>{children}</div>
    </TabContext.Provider>
  );
};

Tabs.propTypes = {
  initialValue: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Tabs;
