import React, { useContext } from "react";
import { TabContext } from ".";

const Tab = ({
  name,
  className = "",
  onClick = () => { },
  children,
  style,
  ...restProps
}) => {
  const { activeTab, changeTab } = useContext(TabContext);

  const handleClick = event => {
    changeTab(name);
    onClick(event);
  };

  return (
    <button
      className={`
      tab
      ${className}
    `}
      onClick={handleClick}
      style={{
        display: "inline-block",
        cursor: "pointer",
        fontSize: "18px",
        lineHeight: "2",
        margin: "0 17px",
        color: activeTab === name ? "#000" : "#777777",
        ...style,
      }}
      type="button"
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Tab;
