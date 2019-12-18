import React from "react";
import PropTypes from "prop-types";
import FilterNavItem from "./FilterNavItem";
import { isObjectEmpty } from "../../utils/helpers";
import { StyledFilterNav } from "../../styles/Navs";

const FilterNav = ({ tagArg, setTagArg }) => {
  return (
    <StyledFilterNav>
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
    </StyledFilterNav>
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
