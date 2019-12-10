import styled from "styled-components";

const OrderStyles = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;

  > .container {
    max-width: 900px;
  }

  .order-details {
    header {
      margin: 43px 0 42px;
      padding: 20px 0 18px;
      text-align: center;
      color: #747474;
      background: #f7f7f7;

      ul {
        display: inline-block;
        font-size: inherit;
        line-height: 1.8;
        margin-top: 0;
        text-align: left;

        li {
          display: inline-block;
          line-height: inherit;
          margin: 0 21px;
          padding: 0;
          border-bottom: 0 none;
          overflow: visible;

          strong {
            color: #242424;
            display: block;
          }
        }
      }
    }

    h2 {
      font-size: 22px;
      margin-bottom: 16px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      border-spacing: 0;

      thead {
        display: none;
      }

      th,
      td {
        padding: 14px;
        vertical-align: middle;
        font-weight: inherit;
        vertical-align: top;
        text-align: left;
      }

      tr {
        td {
          &:first-child {
            text-align: left;
          }
          &:last-child {
            text-align: right;
          }
        }
      }

      tbody {
        tr {
          &:first-child {
            td {
              border-top: 1px solid #eee;
            }
          }
          td {
            padding-top: 17px;
            padding-bottom: 17px;
            border-bottom: 1px solid #eee;
          }
        }
      }

      tfoot {
        small {
          display: block;
        }

        tr {
          th,
          td {
            padding-bottom: 12px;
          }
          td {
            padding-left: 19px;
            text-align: right;
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
              font-size: 18px;
              padding-top: 17px;
              padding-bottom: 17px;
              border-top: 1px solid #eee;
              border-bottom: 1px solid #eee;
            }
          }
        }
      }
    }
  }
`;

export default OrderStyles;
