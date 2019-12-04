import React from "react";
import PropTypes from "prop-types";
import { useMutation } from "react-apollo";
import { CartItemQuanityStyles } from "../../styles/CartStyles";
import { UPDATE_CART_ITEM_QUANITY_MUTATION } from "../../reslovers/Mutation";
import { CURRENT_USER_QUERY } from "../../reslovers/Query";

const CartQuanity = ({ id, quantity }) => {
  const [updateCart, { loading }] = useMutation(
    UPDATE_CART_ITEM_QUANITY_MUTATION,
    {
      refetchQueries: () => [{ query: CURRENT_USER_QUERY }],
    }
  );

  const updateCartQuantity = newQuantity =>
    updateCart({
      variables: { id, quantity: newQuantity },
      // This gets called as soon as we get a response back
      // from the server after a mutation has been performed
      update: (cache, payload) => {
        // 1. first read the cache
        const data = cache.readQuery({ query: CURRENT_USER_QUERY });

        // 2. Find The Index for the cartitem in the cart array so we can update it late
        const { id: cartItemId } = payload.data.updateCartItem;
        const index = data.me.cart.findIndex(item => item.id === cartItemId);

        // 3. Update the cartitem quantity to our new quantity from our found index
        data.me.cart[index].quantity = newQuantity;

        // 4. write it back to the cache
        cache.writeQuery({ query: CURRENT_USER_QUERY, data });
      },
      optimisticResponse: {
        __typename: "Mutation",
        updateCartItem: {
          __typename: "CartItem",
          id,
        },
      },
    });

  return (
    <CartItemQuanityStyles className="input-group" htmlFor="quantity">
      {/* Quantity */}
      Qty
      <fieldset disabled={loading}>
        <button
          className="minus"
          disabled={loading || quantity === 1}
          onClick={() => updateCartQuantity(quantity - 1)}
          type="button"
        >
          Reduce Quantity
        </button>
        <input
          className="input-group-field"
          disabled={loading}
          name="quantity"
          onChange={({ target }) => {
            updateCartQuantity(target.value);
          }}
          type="number"
          value={quantity}
        />
        <button
          className="add"
          disabled={loading}
          onClick={() => updateCartQuantity(quantity + 1)}
          type="button"
        >
          Increase Quantity
        </button>
      </fieldset>
    </CartItemQuanityStyles>
  );
};

CartQuanity.propTypes = {
  id: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default CartQuanity;
