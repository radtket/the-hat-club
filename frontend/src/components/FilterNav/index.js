import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import FilterNavItem from "./FilterNavItem";

const Styles = styled.nav`
  line-height: 18px;
  padding-top: 12px;
  padding-bottom: 12px;

  button {
    color: #272727;
    display: inline-block;
    vertical-align: middle;
    font-size: 20px;
    margin: 0 12px;
    font-family: "Maisonneue Bold";
    position: relative;

    &.active {
      color: #ee5050;
    }

    &:first-of-type {
      margin-left: 0;
    }
  }

  span {
    color: #ccc;
    font-size: 14px;
  }
`;

const FilterNav = ({ tag, setTag }) => {
  return (
    <Styles>
      <FilterNavItem {...{ tag, setTag }} label="All" tagName="ALL" />
      <span>/</span>
      <FilterNavItem {...{ tag, setTag }} tagName="MLB" />
      <span>/</span>
      <FilterNavItem {...{ tag, setTag }} tagName="NFL" />
    </Styles>
  );
};

FilterNav.propTypes = {
  tag: PropTypes.string.isRequired,
  setTag: PropTypes.func.isRequired,
};

export default FilterNav;
