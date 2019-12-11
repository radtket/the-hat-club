import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { padding } from "polished";
import FilterNavItem from "./FilterNavItem";
import { gray, red } from "../../utils/colors";

const Styles = styled.nav`
  ${padding("12px", null)}
  line-height: 18px;

  button {
    color: ${gray[800]};
    display: inline-block;
    font-family: "Maisonneue Bold";
    font-size: 20px;
    margin: 0 12px;
    position: relative;
    vertical-align: middle;

    &.active {
      color: ${red[400]};
    }

    &:first-of-type {
      margin-left: 0;
    }
  }

  span {
    color: ${gray[300]};
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
