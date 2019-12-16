import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { padding } from "polished";
import FilterNavItem from "./FilterNavItem";
import { gray, red } from "../../utils/colors";
import { isObjectEmpty } from "../../utils/helpers";

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

const FilterNav = ({ tagArg, setTagArg }) => {
  return (
    <Styles>
      <FilterNavItem
        isActive={isObjectEmpty(tagArg)}
        label="All"
        onClick={() => {
          setTagArg({});
        }}
      />
      <span>/</span>
      <FilterNavItem
        isActive={tagArg && tagArg.tag === "MLB"}
        label="MLB"
        onClick={() => {
          setTagArg({
            tag: "MLB",
          });
        }}
      />
      <span>/</span>
      <FilterNavItem
        isActive={tagArg && tagArg.tag === "NFL"}
        label="NFL"
        onClick={() => {
          setTagArg({
            tag: "NFL",
          });
        }}
      />
    </Styles>
  );
};

FilterNav.propTypes = {
  tagArg: PropTypes.shape({
    tag: PropTypes.string,
  }),
  setTagArg: PropTypes.func.isRequired,
};

FilterNav.defaultProps = {
  tagArg: {},
};

export default FilterNav;
