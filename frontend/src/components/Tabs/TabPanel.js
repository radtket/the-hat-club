import React, { useContext } from "react";
import { TabContext } from ".";

const TabPanel = ({ name, className = "", children, style, ...restProps }) => {
  const { activeTab } = useContext(TabContext);
  const classNames = `tab-panel ${className}`;

  return (
    activeTab === name && (
      <div
        className={classNames}
        {...restProps}
        style={{
          ...style,
          width: "100%",
        }}
      >
        {children}
      </div>
    )
  );
};

export default TabPanel;
