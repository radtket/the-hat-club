import React from "react";
import { Box } from "@rebass/grid";
import styled from "styled-components";
import PropTypes from "prop-types";
import CartTableRow from "./CartTableRow";

const CartTableStyles = styled(Box)`
  table {
    border-collapse: collapse;
    border-spacing: 0;
    color: #343434;
    margin-bottom: 48px;
    table-layout: auto;
    text-align: left;
    width: 100%;

    thead {
      border-color: inherit;
      display: table-header-group;
      vertical-align: middle;

      tr {
        border-bottom: 1px solid #eaeaea;
        border-top: 1px solid #eaeaea;

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
        color: #343434;
        text-align: inherit;
      }

      tr {
        border-top: 1px solid #eaeaea;

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

const CartTable = ({ cart }) => {
  return (
    <CartTableStyles width={1}>
      <table cellSpacing="0">
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th className="product-name">Product</th>
            <th className="product-price">Price</th>
            <th className="product-quantity">Quantity</th>
            <th className="product-subtotal">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(({ id, item, quantity }) => {
            return <CartTableRow key={id} {...{ ...item, quantity }} />;
          })}
        </tbody>
      </table>
    </CartTableStyles>
  );
};

CartTable.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      quantity: PropTypes.number,
      item: PropTypes.shape({
        description: PropTypes.string,
        id: PropTypes.string,
        image: PropTypes.string,
        price: PropTypes.number,
        title: PropTypes.string,
      }),
    })
  ),
};

CartTable.defaultProps = {
  cart: [],
};

export default CartTable;
