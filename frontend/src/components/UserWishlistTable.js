import React from "react";
import PropTypes from "prop-types";
import { formatMoney, isArrayEmpty } from "../utils/helpers";
import DeleteItem from "./ProductCard/actions/DeleteItem";
import AddToCart from "./ProductCard/actions/AddToCart";
import { StyledWishlistTable } from "../styles/Tables";

const UserWishlistTable = ({ wishlist }) => {
  if (isArrayEmpty(wishlist)) {
    return <h1>No Items in Wishlist</h1>;
  }

  return (
    <StyledWishlistTable>
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
    </StyledWishlistTable>
  );
};

UserWishlistTable.propTypes = {
  wishlist: PropTypes.arrayOf(PropTypes.object),
};

UserWishlistTable.defaultProps = {
  wishlist: [],
};

export default UserWishlistTable;
