import styled from "styled-components";
import { position } from "polished";
import { gray } from "../utils/colors";

const BreadCrumbStyles = styled.ul`
  li {
    ${position("relative", null, null, null, "1px")}
    color: ${gray[900]};
    display: inline-block;
    font-size: 16px;
    margin-right: 12px;
    padding-right: 12px;
    text-transform: capitalize;

    &:last-child {
      margin-right: 0;
      padding-right: 0;

      &::after {
        display: none;
      }
    }

    &::after {
      ${position("absolute", 0, "-4px", null, null)}
      color: ${gray[900]};
      content: "/";
      font-size: inherit;
      font-weight: 400;
    }

    a {
      color: ${gray[500]};
      outline: none;
      text-decoration: none;
      transition: all 0.3s ease;

      &:hover {
        color: ${gray[900]};
      }
    }
  }
`;

export default BreadCrumbStyles;
