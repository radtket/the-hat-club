import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { margin } from "polished";
import { formatMoney, isArrayEmpty } from "../utils/helpers";
import DeleteItem from "./ProductCard/actions/DeleteItem";
import AddToCart from "./ProductCard/actions/AddToCart";
import { gray } from "../utils/colors";

export const WishlistTableStyles = styled.table`
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

const UserWishlistTable = ({ wishlist }) => {
  if (isArrayEmpty(wishlist)) {
    return <h1>No Items in Wishlist</h1>;
  }

  return (
    <WishlistTableStyles>
      <thead>
        <tr>
          <th>Photo</th>
          <th>Product</th>
          <th
            style={{
              textAlign: "center",
            }}
          >
            Price
          </th>
          <th
            style={{
              textAlign: "center",
            }}
          >
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {wishlist.map(({ item }) => {
          if (!item) {
            return null;
          }

          const {
            id,
            images: [primaryImage],
            price,
            title,
          } = item;
          return (
            <tr key={id}>
              <td>
                <img alt={title} src={primaryImage.image} />
              </td>
              <td>{title}</td>
              <td>{formatMoney(price)}</td>
              <td
                style={{
                  minWidth: "124px",
                }}
              >
                <DeleteItem {...{ id }} />
                <AddToCart {...{ id }} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </WishlistTableStyles>
  );
};

UserWishlistTable.propTypes = {
  wishlist: PropTypes.arrayOf(PropTypes.object),
};

UserWishlistTable.defaultProps = {
  wishlist: [],
};

export default UserWishlistTable;
