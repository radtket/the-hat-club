import React from "react";
import { Box } from "@rebass/grid";
import styled from "styled-components";
import { Link } from "react-router-dom";
import QuanityToggle from "../QuanityToggle";
import { formatMoney } from "../../utils/helpers";

const CartTableStyles = styled(Box)`
  table {
    table-layout: auto;
    border-collapse: collapse;
    border-spacing: 0;
    margin-bottom: 48px;
    width: 100%;
    text-align: left;
    color: #343434;

    thead {
      display: table-header-group;
      vertical-align: middle;
      border-color: inherit;
      tr {
        border-top: 1px solid #eaeaea;
        border-bottom: 1px solid #eaeaea;

        th {
          text-align: left;
          line-height: 1;
          padding: 20px 0;
        }
      }
    }
    tbody {
      td,
      th {
        text-align: inherit;
        color: #343434;
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
            width: 40px;
            position: relative;
          }

          &.product-thumbnail {
            width: 100px;
            a {
              display: inline-block;
              img {
                display: inline-block;
                vertical-align: middle;
                max-width: 100%;
                height: auto;
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
          {cart.map(
            ({ id, item: { image, title, price, id: itemID }, quantity }) => {
              return (
                <tr key={id}>
                  <td className="product-thumbnail">
                    <Link to={`/item/${itemID}`}>
                      <img alt={title} src={image} />
                    </Link>
                  </td>

                  <td className="product-name">
                    <Link to={`/item/${itemID}`}>{title}</Link>
                  </td>

                  <td className="product-price">
                    <span className="woocommerce-Price-amount amount">
                      {formatMoney(price)}
                    </span>
                  </td>

                  <td className="product-quantity">
                    <QuanityToggle {...{ quantity }} />
                  </td>

                  <td className="product-subtotal">
                    {formatMoney(price * quantity)}
                  </td>
                  {/* <td className="product-remove"> */}
                  {/* <RemoveFromCart
                            {...{ id }}
                            style={{
                              position: "static",
                            }}
                          /> */}
                  {/* <button aria-label="Remove this item" type="button">
                            ×
                          </button> */}
                  {/* </td> */}
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </CartTableStyles>
  );
};

export default CartTable;
