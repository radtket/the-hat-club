import React from "react";
import { Flex, Box } from "@rebass/grid";
import { useQuery, useMutation } from "react-apollo";
import styled from "styled-components";
import CartStyles, { CartOverlay } from "../styles/CartStyles";
import { CURRENT_USER_QUERY, LOCAL_STATE_QUERY } from "../reslovers/Query";
import { TOGGLE_CART_MUTATION } from "../reslovers/Mutation";
import TakeMyMoney from "../components/Cart/TakeMyMoney";
import CartListItems from "../components/Cart/CartListItems";
import { PageSection, PageTitleStacked, ErrorMessage } from "../components";
import QuanityToggle from "../components/QuanityToggle";

const CartTableStyles = styled(Box)`
  table {
    table-layout: auto;
    border-collapse: collapse;
    border-spacing: 0;
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
          font-size: 13px;
          text-align: left;
          font-weight: 400;
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
          }
          &.product-thumbnail {
            width: 120px;
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

const CartDetails = () => {
  const [toggleCart] = useMutation(TOGGLE_CART_MUTATION);
  const { data, loading, error } = useQuery(CURRENT_USER_QUERY);
  const {
    data: { isCartOpen },
  } = useQuery(LOCAL_STATE_QUERY);

  if (loading) {
    return null;
  }

  if (error) {
    return <ErrorMessage {...{ error }} />;
  }

  const { me } = data;

  return (
    <PageSection className="bg-red">
      <div className="container">
        <Flex alignItems="center" className="row" justifyContent="center">
          <PageTitleStacked title="Cart." />
        </Flex>
        <Flex alignItems="center" className="row" justifyContent="center">
          <CartTableStyles width={1}>
            <table
              cellSpacing="0"
              className="shop_table shop_table_responsive cart woocommerce-cart-form__contents"
            >
              <thead>
                <tr>
                  <th className="product-remove">&nbsp;</th>
                  <th className="product-thumbnail">&nbsp;</th>
                  <th className="product-name">Product</th>
                  <th className="product-price">Price</th>
                  <th className="product-quantity">Quantity</th>
                  <th className="product-subtotal">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <tr className="woocommerce-cart-form__cart-item cart_item">
                  <td className="product-remove">
                    <a
                      aria-label="Remove this item"
                      className="remove"
                      data-product_id="196"
                      data-product_sku="53634"
                      href="https://revolution.fuelthemes.net/revolution-shop/cart/?remove_item=084b6fbb10729ed4da8c3d3f5a3ae7c9&amp;_wpnonce=be3fb0df43"
                    >
                      ×
                    </a>
                  </td>

                  <td className="product-thumbnail">
                    <a href="https://revolution.fuelthemes.net/revolution-shop/product/embossed-backpack-in-brown/">
                      <img
                        alt=""
                        className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                        height="750"
                        src="https://revolution.fuelthemes.net/revolution-shop/wp-content/uploads/sites/18/2017/08/z29-1-600x750.jpg"
                        width="600"
                      />
                    </a>
                  </td>

                  <td className="product-name" data-title="Product">
                    <a href="https://revolution.fuelthemes.net/revolution-shop/product/embossed-backpack-in-brown/">
                      Embossed Backpack in Brown
                    </a>
                  </td>

                  <td className="product-price" data-title="Price">
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">
                        $
                      </span>
                      186.00
                    </span>
                  </td>

                  <td className="product-quantity" data-title="Quantity">
                    <QuanityToggle />
                  </td>

                  <td className="product-subtotal" data-title="Subtotal">
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">
                        $
                      </span>
                      186.00
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </CartTableStyles>
        </Flex>
      </div>
    </PageSection>
  );
};

export default CartDetails;
