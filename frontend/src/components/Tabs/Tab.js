import React, { useContext } from "react";
import PropTypes from "prop-types";
import { TabContext } from ".";
import { StyledTab } from "../../styles/Buttons";

const Tab = ({ name, className, onClick, children, ...restProps }) => {
  const { activeTab, changeTab } = useContext(TabContext);

  const handleClick = event => {
    changeTab(name);
    onClick(event);
  };

  return (
    <StyledTab
      className={`
      tab
      ${className}
    `}
      onClick={handleClick}
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
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Tab.defaultProps = {
  onClick: () => {},
  name: "",
  className: "",
};

export default Tab;
