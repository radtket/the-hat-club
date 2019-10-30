import React, { useContext } from "react";
import PropTypes from "prop-types";
import { IconButton } from "@material-ui/core";

import { Remove } from "@material-ui/icons";
import { useMutation } from "react-apollo";
import { REMOVE_ITEM_FROM_CART_MUTATION } from "../../reslovers/Mutation";
import { CURRENT_USER_QUERY } from "../../reslovers/Query";
import { StatusSnackbarContext } from "../StatusSnackbar";

const RemoveFromCart = ({ id }) => {
  const { openSnackbar } = useContext(StatusSnackbarContext);

  const [removeFromCart, { loading }] = useMutation(
    REMOVE_ITEM_FROM_CART_MUTATION,
    {
      variables: {
        id,
      },
      // This gets called as soon as we get a response back
      // from the server after a mutation has been performed
      update: (cache, payload) => {
        // 1. first read the cache
        const data = cache.readQuery({ query: CURRENT_USER_QUERY });
        // 2. remove that item from the cart
        const { id: cartItemId } = payload.data.removeFromCart;

        data.me.cart = data.me.cart.filter(
          cartItem => cartItem.id !== cartItemId
        );
        // 3. write it back to the cache
        cache.writeQuery({ query: CURRENT_USER_QUERY, data });
      },
      optimisticResponse: {
        __typename: "Mutation",
        removeFromCart: {
          __typename: "CartItem",
          id,
        },
      },
    }
  );

  return (
    <IconButton
      aria-label="comments"
      color="primary"
      disabled={loading}
      edge="end"
      onClick={() =>
        removeFromCart().catch(({ message }) => {
          openSnackbar({
            message,
            variant: "error",
          });
        })
      }
      size="small"
    >
      <Remove fontSize="small" />
    </IconButton>
  );
};

RemoveFromCart.propTypes = {
  id: PropTypes.string.isRequired,
};

export default RemoveFromCart;
