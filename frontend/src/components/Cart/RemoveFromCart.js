import React from "react";
import PropTypes from "prop-types";
import { useMutation } from "react-apollo";
import notifier from "simple-react-notifications";
import { REMOVE_ITEM_FROM_CART_MUTATION } from "../../reslovers/Mutation";
import { CURRENT_USER_QUERY } from "../../reslovers/Query";
import { RemoveFromCartButton } from "../../styles/CartStyles";

const RemoveFromCart = ({ id, ...props }) => {
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
    <RemoveFromCartButton
      {...props}
      disabled={loading}
      onClick={() =>
        removeFromCart().catch(({ message }) => {
          notifier.error(message);
        })
      }
      size="small"
      type="button"
    >
      x
    </RemoveFromCartButton>
  );
};

RemoveFromCart.propTypes = {
  id: PropTypes.string.isRequired,
};

export default RemoveFromCart;
