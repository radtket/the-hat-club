import styled from "styled-components";
import { SmallSection } from "../components/Sections";

const PageTitleStyles = styled(SmallSection)`
  background: #eee;
  color: #464646;
  margin-bottom: ${({ theme }) => theme.largeSpacing};

  h1 {
    font-size: 36px;
    line-height: 1;
    margin: 0;
  }

  .container {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
`;

export default PageTitleStyles;
