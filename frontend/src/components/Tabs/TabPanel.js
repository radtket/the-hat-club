import React, { useContext } from "react";
import PropTypes from "prop-types";
import { TabContext } from ".";

const TabPanel = ({ name, className, children, style, ...props }) => {
  const { activeTab } = useContext(TabContext);

  if (activeTab !== name) {
    return null;
  }

  return (
    <div
      className={`tab-panel ${className}`}
      {...props}
      style={{
        ...style,
        width: "100%",
      }}
    >
      {children}
    </div>
  );
};

TabPanel.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
};

TabPanel.defaultProps = {
  className: "",
  style: {},
};

export default TabPanel;
