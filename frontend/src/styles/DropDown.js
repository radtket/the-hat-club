import styled, { keyframes } from "styled-components";
import { size, position } from "polished";
import { white, gray, bada55 } from "../utils/colors";

const glow = keyframes`
  from {
    box-shadow: 0 0 0px yellow;
  }

  to {
    box-shadow: 0 0 10px 1px yellow;
  }
`;

const DropDown = styled.div`
  border: 1px solid ${gray[200]};
  position: absolute;
  width: 100%;
  z-index: 2;
`;

const DropDownItem = styled.div`
  border-bottom: 1px solid ${gray[200]};
  background: ${({ highlighted }) => (highlighted ? gray[100] : white)};
  padding: 1rem;
  transition: all 0.2s;
  ${({ highlighted }) => (highlighted ? "padding-left: 2rem;" : null)};
  display: flex;
  align-items: center;
  border-left: 10px solid
    ${({ highlighted }) => (highlighted ? gray[200] : white)};
  img {
    margin-right: 10px;
  }
`;

const SearchStyles = styled.fieldset`
  position: relative;
  border: 0;
  width: 100%;
  transition: all 0.25s cubic-bezier(0.25, 0.8, 0.25, 1);

  > div {
    position: relative;

    &::after {
      ${position("absolute", null, null, 0, 0)}
      ${size("1px", 0)}
      content: "";
      display: block;
      background: ${bada55};
    }
  }

  input {
    ${size("60px", "100%")}
    background: transparent;
    border: 0;
    border-radius: 0;
    color: ${white};
    font-size: 36px;
    font-weight: 400;
    margin: 0;
    max-width: 100%;
    outline: 0;
    padding: 0 50px 0 0;
    transition: all 0.25s cubic-bezier(0.25, 0.8, 0.25, 1);

    &.loading {
      animation: ${glow} 0.5s ease-in-out infinite alternate;
    }
  }
`;

export { DropDown, DropDownItem, SearchStyles };
