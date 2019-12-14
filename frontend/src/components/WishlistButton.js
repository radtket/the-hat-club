import React from "react";
import PropTypes from "prop-types";
import { useMutation, useQuery } from "react-apollo";
import clsx from "clsx";
import styled from "styled-components";
import { HeartSolidStrokeIcon } from "./Icons";
import { IconButton } from "../styles/Form";
import { ITEM_WISHLIST_TOGGLE_MUTATION } from "../reslovers/Mutation";
import { CURRENT_USER_QUERY } from "../reslovers/Query";
import { gray, red } from "../utils/colors";

const WishlistButtonStyles = styled(IconButton)`
  svg {
    .stroke,
    .fill {
      transition: fill 0.3s;
    }

    .stroke {
      fill: ${gray[400]};
    }

    .fill {
      fill: transparent;
    }
  }

  &:hover {
    svg {
      .stroke {
        fill: ${gray[800]};
      }
    }
  }

  &.active {
    svg {
      .stroke,
      .fill {
        fill: ${red[400]};
      }
    }
    &:hover {
      svg {
        .stroke,
        .fill {
          fill: ${red[300]};
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
    data &&
    data.me &&
    data.me.wishlist &&
    data.me.wishlist.some(({ item }) => item && item.id === id);

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
