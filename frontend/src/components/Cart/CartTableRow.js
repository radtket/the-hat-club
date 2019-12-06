import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import QuanityToggle from "../QuanityToggle";
import { formatMoney } from "../../utils/helpers";

const CartTableRow = ({ images, title, price, id, quantity }) => {
  const [quantityState, setQuantityState] = useState(12);
  const { image } = images[0];

  return (
    <tr key={id}>
      <td className="product-thumbnail">
        <Link to={`/item/${id}`}>
          <img alt={title} src={image} />
        </Link>
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
        <QuanityToggle {...{ quantityState, setQuantityState }} />
      </td>

      <td className="product-subtotal">{formatMoney(price * quantity)}</td>
      {/* <td className="product-remove"> */}
      {/* <RemoveFromCart
                            {...{ id }}
                            style={{
                              position: "static",
                            }}
                          /> */}
      {/* <button aria-label="Remove this item" type="button">
                            ×
                          </button> */}
      {/* </td> */}
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
};

export default CartTableRow;
