import styled from "styled-components";
import { gray } from "../utils/colors";

const Table = styled.table`
  border: 1px solid ${gray[200]};
  border-spacing: 0;
  width: 100%;

  thead {
    font-size: 10px;
  }

  td,
  th {
    border-bottom: 1px solid ${gray[200]};
    border-right: 1px solid ${gray[200]};
    padding: 5px;
    position: relative;

    &:last-child {
      border-right: none;
      width: 150px;

      button {
        width: 100%;
      }
    }

    label {
      display: block;
      padding: 10px 5px;
    }
  }

  tr {
    &:hover {
      background: ${gray[200]};
    }
  }
`;

export default Table;
