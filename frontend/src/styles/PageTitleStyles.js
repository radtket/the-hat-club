import styled from "styled-components";
import { SmallSection } from "../components/Sections";
import { gray } from "../utils/colors";

const PageTitleStyles = styled(SmallSection)`
  background: ${gray[200]};
  color: ${gray[700]};
  margin-bottom: ${({ theme }) => theme.spacing.large};

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
