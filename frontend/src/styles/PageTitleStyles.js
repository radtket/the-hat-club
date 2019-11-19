import styled from "styled-components";
import { padding } from "polished";
import { SmallSection } from "../components/Sections";

const PageTitleStyles = styled(SmallSection)`
  margin-bottom: ${({ theme }) => theme.largeSpacing};
  background: #eee;
  color: #4b4e53;

  h1 {
    font-size: 36px;
    line-height: 1;
    margin: 0;
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default PageTitleStyles;
