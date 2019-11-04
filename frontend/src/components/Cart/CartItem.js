import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import RemoveFromCart from "./RemoveFromCart";
import { formatMoney } from "../../utils/helpers";

const CartItem = ({ id, quantity, item }) => {
  const [updatedQuantity, setUpdatedQuantity] = useState(quantity);
  if (!item) {
    return (
      <li className="cart-item">
        This item has been deleted from the seller
        <RemoveFromCart {...{ id }} />
      </li>
    );
  }

  const { title, image, price } = item;

  return (
    <li className="cart-item">
      <Link className="cart-item__image" to={`/item/${id}`}>
        <figure>
          <img alt={title} src={image} />
        </figure>
      </Link>
      <dl className="cart-item__desc">
        <dt>
          <Link to={`/item/${id}`}>{title}</Link>
        </dt>
        <dd>
          <label className="input-group" htmlFor="quantity">
            {/* Quantity */}
            Qty
            <fieldset>
              <button
                className="minus"
                onClick={() => {
                  setUpdatedQuantity(prev => prev - 1);
                }}
                type="button"
              >
                Reduce Quantity
              </button>
              <input
                className="input-group-field"
                name="quantity"
                onChange={({ target }) => {
                  setUpdatedQuantity(target.value);
                }}
                type="number"
                value={updatedQuantity}
              />
              <button
                className="add"
                onClick={() => {
                  setUpdatedQuantity(prev => prev + 1);
                }}
                type="button"
              >
                Increase Quantity
              </button>
            </fieldset>
          </label>
          <span>
            <span>$</span>
            {/* {price} */}
            {formatMoney(price * updatedQuantity)}
          </span>
        </dd>
      </dl>
      <RemoveFromCart {...{ id }} />
    </li>
  );
};

CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  item: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
  }),
};

CartItem.defaultProps = {
  item: null,
};

export default CartItem;
