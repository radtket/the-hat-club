import styled, { keyframes } from "styled-components";

const glow = keyframes`
  from {
    box-shadow: 0 0 0px yellow;
  }

  to {
    box-shadow: 0 0 10px 1px yellow;
  }
`;

const DropDown = styled.div`
  position: absolute;
  width: 100%;
  z-index: 2;
  border: 1px solid ${({ theme }) => theme.lightgrey};
`;

const DropDownItem = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.lightgrey};
  background: ${({ highlighted }) => (highlighted ? "#f7f7f7" : "white")};
  padding: 1rem;
  transition: all 0.2s;
  ${({ highlighted }) => (highlighted ? "padding-left: 2rem;" : null)};
  display: flex;
  align-items: center;
  border-left: 10px solid
    ${({ highlighted, theme }) => (highlighted ? theme.lightgrey : "white")};
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
      content: "";
      display: block;
      height: 1px;
      width: 0;
      position: absolute;
      left: 0;
      bottom: 0;
      background: #bada55;
    }
  }

  input {
    background: transparent;
    border: 0;
    border-radius: 0;
    color: #fff;
    font-size: 36px;
    font-weight: 400;
    height: 60px;
    margin: 0;
    max-width: 100%;
    outline: 0;
    padding: 0 50px 0 0;
    transition: all 0.25s cubic-bezier(0.25, 0.8, 0.25, 1);
    width: 100%;

    &.loading {
      animation: ${glow} 0.5s ease-in-out infinite alternate;
    }
  }
`;

export { DropDown, DropDownItem, SearchStyles };
