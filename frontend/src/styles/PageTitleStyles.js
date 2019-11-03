import styled from "styled-components";

const NavbarStyles = styled.header`
  padding-top: ${({ theme }) => theme.largeSpacing};
  padding-bottom: ${({ theme }) => theme.largeSpacing};
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
