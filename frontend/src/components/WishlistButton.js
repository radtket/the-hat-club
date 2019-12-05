import React from "react";
import PropTypes from "prop-types";
import { useMutation, useQuery } from "react-apollo";
import { HeartIcon } from "./Icons";
import { IconButton } from "../styles/Form";
import { ITEM_WISHLIST_TOGGLE_MUTATION } from "../reslovers/Mutation";
import { CURRENT_USER_QUERY } from "../reslovers/Query";

const WishlistButton = ({ id }) => {
  const { data } = useQuery(CURRENT_USER_QUERY);
  const [toggleWishlist, { loading }] = useMutation(
    ITEM_WISHLIST_TOGGLE_MUTATION,
    {
      refetchQueries: () => [{ query: CURRENT_USER_QUERY }],
      variables: {
        id,
      },
    }
  );

  const wishlistItem =
    data && data.me && data.me.wishlist.some(({ item }) => item.id === id);

  // console.log(`${wishlistItem ? "Remove" : "Add"} wishlist: ID# ${id}`);

  return (
    <IconButton disabled={loading} onClick={toggleWishlist} type="button">
      <HeartIcon
        style={{
          fill: wishlistItem ? "#bada55" : "#a0a0a0",
        }}
      />
    </IconButton>
  );
};

WishlistButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default WishlistButton;
