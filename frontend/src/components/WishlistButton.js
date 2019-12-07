import React from "react";
import PropTypes from "prop-types";
import { useMutation, useQuery } from "react-apollo";
import clsx from "clsx";
import styled from "styled-components";
import { HeartSolidStrokeIcon } from "./Icons";
import { IconButton } from "../styles/Form";
import { ITEM_WISHLIST_TOGGLE_MUTATION } from "../reslovers/Mutation";
import { CURRENT_USER_QUERY } from "../reslovers/Query";

const WishlistButtonStyles = styled(IconButton)`
  svg {
    .stroke,
    .fill {
      transition: fill 0.3s;
    }

    .stroke {
      fill: #a0a0a0;
    }

    .fill {
      fill: transparent;
    }
  }

  &:hover {
    svg {
      .stroke {
        fill: #282828;
      }
    }
  }

  &.active {
    svg {
      .stroke,
      .fill {
        fill: #ee5050;
      }
    }
    &:hover {
      svg {
        .stroke,
        .fill {
          fill: #cf3a3a;
        }
      }
    }
  }
`;

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
    <WishlistButtonStyles
      className={clsx(wishlistItem && "active")}
      disabled={loading}
      onClick={toggleWishlist}
      type="button"
    >
      <HeartSolidStrokeIcon />
    </WishlistButtonStyles>
  );
};

WishlistButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default WishlistButton;
