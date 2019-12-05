import React from "react";
import PropTypes from "prop-types";
import { isArrayEmpty } from "../../../utils/helpers";

const WishList = ({ wishlist }) => {
  return (
    <>
      <h2>WishList</h2>

      <ul>
        {isArrayEmpty(wishlist) ? (
          <li>No Items in Wishlist</li>
        ) : (
          wishlist.map(({ item }) => {
            return <li key={item.id}>{item.title}</li>;
          })
        )}
      </ul>
    </>
  );
};

WishList.propTypes = {
  wishlist: PropTypes.arrayOf(PropTypes.object),
};

WishList.defaultProps = {
  wishlist: [],
};

export default WishList;
