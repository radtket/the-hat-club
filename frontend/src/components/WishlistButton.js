import React from "react";
import PropTypes from "prop-types";
import { useMutation, useQuery } from "react-apollo";
import clsx from "clsx";
import { HeartSolidStrokeIcon } from "./Icons";
import { StyledWishlistButton } from "../styles/Buttons";
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
    data &&
    data.me &&
    data.me.wishlist &&
    data.me.wishlist.some(({ item }) => item && item.id === id);

  return (
    <StyledWishlistButton
      className={clsx(wishlistItem && "active")}
      disabled={loading}
      onClick={toggleWishlist}
      type="button"
    >
      <HeartSolidStrokeIcon />
    </StyledWishlistButton>
  );
};

WishlistButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default WishlistButton;
