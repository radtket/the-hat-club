import styled from "styled-components";
import { padding, margin } from "polished";
import { gray } from "../utils/colors";
import { StyledTable } from "./Tables";

const OrderStyles = styled.div`
  ${padding("24px", null)}

  > .container {
    max-width: 900px;
  }

  .order-details {
    header {
      ${margin("42px", null)}
      ${padding("18px", null)}
      color: ${gray[500]};
      background: ${gray[100]};

      ul {
        display: inline-block;
        line-height: 1.8;

        li {
          border-bottom: 0 none;
          display: inline-block;
          line-height: inherit;
          margin: 0 21px;
          overflow: visible;
          padding: 0;

          strong {
            color: ${gray[800]};
            display: block;
          }
        }
      }
    }

    h2 {
      font-size: 22px;
      margin-bottom: 16px;
    }

    ${StyledTable} {
      thead {
        display: none;
      }

      tr {
        &:last-child {
          td {
            border-bottom: 0;
          }
        }

        td {
          border-top: 0;
        }
      }

      th,
      td {
        vertical-align: top;
      }

      tr {
        td {
          &:last-child {
            text-align: right;
          }
        }
      }

      tbody {
        tr {
          &:first-child {
            td {
              border-top: 1px solid ${gray[200]};
            }
          }
          td {
            padding-top: 16px;
            padding-bottom: 16px;
            border-bottom: 1px solid ${gray[200]};
          }
        }
      }

      tfoot {
        small {
          display: block;
        }

        tr {

          td {
            padding-left: 20px;
          }

          &:nth-last-child(2) {
            th,
            td {
              padding-bottom: 20px;
            }
          }

          &:first-child {
            th,
            td {
              padding-top: 20px;
            }
          }

          &:last-child {
            th,
            td {
              ${padding("16px", null)}
              border-bottom: 1px solid ${gray[200]};
              border-top: 1px solid ${gray[200]};
              font-size: 18px;
            }
          }
        }
      }
    }
  }
`;

export default OrderStyles;
