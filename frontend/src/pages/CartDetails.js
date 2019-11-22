import React from "react";
import { Flex, Box } from "@rebass/grid";
import { useQuery, useMutation } from "react-apollo";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CartStyles, { CartOverlay } from "../styles/CartStyles";
import { CURRENT_USER_QUERY, LOCAL_STATE_QUERY } from "../reslovers/Query";
import { TOGGLE_CART_MUTATION } from "../reslovers/Mutation";
import TakeMyMoney from "../components/Cart/TakeMyMoney";
import CartListItems from "../components/Cart/CartListItems";
import { PageSection, PageTitleStacked, ErrorMessage } from "../components";
import QuanityToggle from "../components/QuanityToggle";
import { formatMoney } from "../utils/helpers";
import RemoveFromCart from "../components/Cart/RemoveFromCart";
import Button from "../components/Button";
import CartTable from "../components/Cart/CartTable";

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

const CartDetails = () => {
  const { data, loading, error } = useQuery(CURRENT_USER_QUERY);

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
        <Flex alignItems="center" justifyContent="center">
          <PageTitleStacked title="Cart." />
        </Flex>

        <Flex alignItems="center" justifyContent="center">
          <CartTable {...me} />
        </Flex>

        <Flex justifyContent="space-between">
          <Button size="lg" type="button">
            Back To Shop
          </Button>
          <Button size="lg" type="button">
            Update Cart
          </Button>
        </Flex>
      </div>
    </PageSection>
  );
};

export default CartDetails;
