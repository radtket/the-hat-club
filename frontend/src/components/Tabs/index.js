import React, { createContext, useState } from "react";
// import "./tabs.scss";

export const TabContext = createContext();

const Tabs = ({ initialValue, children, ...restProps }) => {
  const [activeTab, changeTab] = useState(initialValue);

  return (
    <TabContext.Provider value={{ activeTab, changeTab }}>
      <div {...restProps}>{children}</div>
    </TabContext.Provider>
  );
};

export default Tabs;
