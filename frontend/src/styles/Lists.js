import { Flex } from "@rebass/grid";
import styled from "styled-components";
import { margin, position } from "polished";
import { gray } from "../utils/colors";

export const StyledFaqItem = styled(Flex)`
  font-size: 18px;
  line-height: 1.6;
  margin-top: 16px;

  dt {
    ${margin("16px", null)}
  }

  dd {
    color: ${gray[500]};
  }
`;

export const StyledProductTermsList = styled.ul`
  margin: 10px 0;

  li {
    font-size: 16px;
    margin-bottom: 8px;
    padding-left: 24px;
    position: relative;

    a {
      display: block;
    }

    /* &::before { */
    svg {
      ${position("absolute", "2px", null, null, "2px")}
      height: 14px;
      vertical-align: middle;
      /* width: 14px; */
    }
  }

  /* svg {
      height: 0.9375rem;
      width: 0.9375rem;
      vertical-align: middle;
      margin-right: 0.5rem;
    } */
`;
