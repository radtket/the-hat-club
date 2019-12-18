import { Box } from "@rebass/grid";
import styled from "styled-components";
import { margin } from "polished";
import { gray } from "../utils/colors";

export const StyledCartTableWrap = styled(Box)`
  table {
    border-collapse: collapse;
    border-spacing: 0;
    color: ${gray[700]};
    margin-bottom: 48px;
    table-layout: auto;
    text-align: left;
    width: 100%;

    thead {
      border-color: inherit;
      display: table-header-group;
      vertical-align: middle;

      tr {
        border-bottom: 1px solid ${gray[200]};
        border-top: 1px solid ${gray[200]};

        th {
          line-height: 1;
          padding: 20px 0;
          text-align: left;
        }
      }
    }

    tbody {
      td,
      th {
        color: ${gray[700]};
        text-align: inherit;
      }

      tr {
        border-top: 1px solid ${gray[200]};

        td {
          padding: 30px 25px 30px 0;

          /* &:last-child {
            text-align: right;
            padding-right: 0;
          } */

          &.product-remove {
            position: relative;
            width: 40px;
          }

          &.product-thumbnail {
            width: 100px;
            a {
              display: inline-block;

              img {
                display: inline-block;
                height: auto;
                max-width: 100%;
                vertical-align: middle;
                -ms-interpolation-mode: bicubic;
              }
            }
          }
        }
      }
    }
  }
`;

export const StyledSellingTable = styled.table`
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
`;

export const StyledWishlistTable = styled.table`
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
`;

export const StyledOrdersTable = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;

  th,
  td {
    font-weight: inherit;
    padding: 14px;
    text-align: left;
    vertical-align: middle;
    vertical-align: top;
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

  td {
    border-top: 1px solid ${gray[200]};
  }
`;
