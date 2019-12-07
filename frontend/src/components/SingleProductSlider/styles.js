import styled from "styled-components";
import { size, position } from "polished";

export const ImageNav = styled.nav`
  ${position("absolute", 0, null, null, 0)}
  ${size("100%", "70px")}
`;

export const ImageNavItem = styled.button`
  ${size("auto", "70px")}
  display: block;
  margin: 12px 0;
  padding: 0;
  transition: 0.5s;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.2)};

  &::before {
    display: none;
  }

  &:focus {
    outline: 0;
  }

  img {
    display: block;
    height: auto;
  }
`;
