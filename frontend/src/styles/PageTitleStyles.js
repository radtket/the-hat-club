import styled from "styled-components";
import { padding } from "polished";

const NavbarStyles = styled.header`
  ${({ theme }) => padding(theme.largeSpacing, null)};
  margin-bottom: ${({ theme }) => theme.largeSpacing};
  background: #eee;
  color: #4b4e53;

  h1 {
    font-size: 36px;
    line-height: 1;
    margin-bottom: 0;
  }

  .container {
    display: flex;
    justify-content: space-between;
  }
`;

export default NavbarStyles;
