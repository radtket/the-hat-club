import React from "react";
import PropTypes from "prop-types";
import UserWishlistTable from "../../../components/UserWishlistTable";

const WishList = ({ wishlist }) => {
  return (
    <>
      <h2>WishList</h2>
      <UserWishlistTable {...{ wishlist }} />
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
