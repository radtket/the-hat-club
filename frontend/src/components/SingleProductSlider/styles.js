import styled from "styled-components";

export const ImageNav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 70px;
  height: 100%;
`;

export const ImageNavItem = styled.button`
  display: block;
  margin: 12px 0;
  padding: 0;
  transition: 0.5s;
  width: 70px;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.2)};
  height: auto;

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
