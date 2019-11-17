import React from "react";
import styled from "styled-components";

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

const FilterNav = () => {
  return (
    <Styles>
      <button className="active" type="button">
        All
      </button>
      <span>/</span>
      <button type="button">MLB</button>
      <span>/</span>
      <button type="button">NFL</button>
    </Styles>
  );
};

export default FilterNav;
