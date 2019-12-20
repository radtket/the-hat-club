import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useMutation } from "react-apollo";
import QuanityToggle from "../QuanityToggle";
import { formatMoney } from "../../utils/helpers";
import { CartTableImage } from "../../styles/CartStyles";

import { UPDATE_CART_ITEM_QUANITY_MUTATION } from "../../reslovers/Mutation";
import { CURRENT_USER_QUERY } from "../../reslovers/Query";

const CartTableRow = ({ images, title, price, id, quantity, itemId }) => {
  const { image } = images[0];

  const [updateCart, { loading }] = useMutation(
    UPDATE_CART_ITEM_QUANITY_MUTATION,
    {
      refetchQueries: () => [{ query: CURRENT_USER_QUERY }],
    }
  );

  const updateCartQuantity = newQuantity =>
    updateCart({
      variables: { id: itemId, quantity: newQuantity },
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
          id: itemId,
        },
      },
    });

  return (
    <tr>
      <td>
        <CartTableImage to={`/item/${id}`}>
          <img alt={title} src={image} />
        </CartTableImage>
      </td>

      <td className="product-name">
        <Link to={`/item/${id}`}>{title}</Link>
      </td>

      <td className="product-price">
        <span className="woocommerce-Price-amount amount">
          {formatMoney(price)}
        </span>
      </td>

      <td className="product-quantity">
        <QuanityToggle
          {...{ quantity, updateQuantity: updateCartQuantity, loading }}
        />
      </td>

      <td className="product-subtotal">{formatMoney(price * quantity)}</td>
      <td
        style={{
          textAlign: "right",
          paddingRight: 0,
          position: "relative",
          width: "40px",
        }}
      >
        {/* <RemoveFromCart
          {...{ id }}
          style={{
            position: "static",
          }}
        /> */}
        <button aria-label="Remove this item" type="button">
          ×
        </button>
      </td>
    </tr>
  );
};

CartTableRow.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      largeImage: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  itemId: PropTypes.string.isRequired,
};

export default CartTableRow;
