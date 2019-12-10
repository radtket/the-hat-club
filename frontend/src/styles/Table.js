import styled from "styled-components";

const Table = styled.table`
  border: 1px solid #eee;
  border-spacing: 0;
  width: 100%;

  thead {
    font-size: 10px;
  }

  td,
  th {
    border-bottom: 1px solid #eee;
    border-right: 1px solid #eee;
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
      background: #eee;
    }
  }
`;

export default Table;
