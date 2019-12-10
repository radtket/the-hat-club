import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { TabContext } from ".";

const TabStyles = styled.button`
  color: ${({ isActive }) => (isActive ? "#000" : "#747474")};
  cursor: pointer;
  display: inline-block;
  font-size: 18px;
  line-height: 1;
  margin-bottom: 18px;
  outline: 0;
  padding: 0;
  position: relative;

  /* &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 1px;
    background: ${({ isActive }) => (isActive ? "#747474" : "transparent")};
    bottom: -5px;
    left: 0;
  } */
`;

const Tab = ({ name, className, onClick, children, ...restProps }) => {
  const { activeTab, changeTab } = useContext(TabContext);

  const handleClick = event => {
    changeTab(name);
    onClick(event);
  };

  return (
    <TabStyles
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
    </TabStyles>
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
