import React, { useContext } from "react";
import PropTypes from "prop-types";
import { TabContext } from ".";
import { StyledTab } from "../../styles/Buttons";

const Tab = ({ name, onClick, children, ...restProps }) => {
  const { activeTab, changeTab } = useContext(TabContext);

  return (
    <StyledTab
      onClick={event => {
        changeTab(name);
        onClick(event);
      }}
      type="button"
      {...restProps}
      isActive={activeTab === name}
    >
      {children}
    </StyledTab>
  );
};

Tab.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string,
  onClick: PropTypes.func,
};

Tab.defaultProps = {
  onClick: () => {},
  name: "",
};

export default Tab;
