import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import RemoveFromCart from "./RemoveFromCart";
import { formatMoney } from "../../utils/helpers";
import { CartItemStyles } from "../../styles/CartStyles";
import CartQuanity from "./CartQuanity";

const CartItem = ({ id, quantity, item, ...props }) => {
  if (!item) {
    return (
      <CartItemStyles {...props}>
        This item has been deleted from the seller
        <RemoveFromCart {...{ id }} />
      </CartItemStyles>
    );
  }

  const { title, images, price } = item;
  const { image } = images[0];
  return (
    <CartItemStyles {...props}>
      <Link to={`/item/${id}`}>
        <figure>
          <img alt={title} src={image} />
        </figure>
      </Link>
      <dl>
        <dt>
          <Link to={`/item/${id}`}>{title}</Link>
        </dt>
        <dd>
          <CartQuanity {...{ id, quantity }} />
          <span>
            {/* {price} */}
            {formatMoney(price * quantity)}
          </span>
        </dd>
      </dl>
      <RemoveFromCart {...{ id }} />
    </CartItemStyles>
  );
};

CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  item: PropTypes.shape({
    title: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string.isRequired,
        largeImage: PropTypes.string.isRequired,
      })
    ),
    price: PropTypes.number,
  }),
};

CartItem.defaultProps = {
  item: null,
};

export default CartItem;
