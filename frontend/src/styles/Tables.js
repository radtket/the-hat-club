import styled from "styled-components";
import { margin } from "polished";
import { gray } from "../utils/colors";

export const StyledTable = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;

  th,
  td {
    font-weight: inherit;
    padding: 12px;
    text-align: left;
    vertical-align: middle;
  }

  td {
    img {
      display: block;
      height: 64px;
    }

    button {
      ${margin(null, "6px")}

      svg {
        display: block;
        height: 20px;
      }
    }
  }

  tr {
    &:last-child {
      td {
        border-bottom: 1px solid ${gray[200]};
      }
    }

    td {
      border-top: 1px solid ${gray[200]};
    }
  }
`;

export const StyledUserPermissionsTable = styled(StyledTable)`
  border: 1px solid ${gray[200]};

  td,
  th {
    border-bottom: 1px solid ${gray[200]};
    border-right: 1px solid ${gray[200]};
    padding: 5px;
    position: relative;
  }

  tr {
    &:hover {
      background: ${gray[200]};
    }
  }
`;

export const StyledCartTable = styled(StyledTable)`
  color: ${gray[700]};
  margin-bottom: 48px;

  thead {
    tr {
      border-top: 1px solid ${gray[200]};

      th {
        line-height: 1;
        padding: 20px 0;
        text-align: left;
      }
    }
  }

  tbody {
    tr {
      td {
        padding: 30px 25px 30px 0;
      }
    }
  }
`;
