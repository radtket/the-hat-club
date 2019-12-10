import styled from "styled-components";
import { position } from "polished";

const BreadCrumbStyles = styled.ul`
  li {
    ${position("relative", null, null, null, "1px")}
    color: #111;
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
      color: #111;
      content: "/";
      font-size: inherit;
      font-weight: 400;
    }

    a {
      color: #747474;
      outline: none;
      text-decoration: none;
      transition: all 0.3s ease;

      &:hover {
        color: #111;
      }
    }
  }
`;

export default BreadCrumbStyles;
