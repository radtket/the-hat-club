import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { formatMoney } from "../utils/helpers";

const OrderItem = ({ id, title, price, quantity }) => {
  return (
    <tr>
      <td>
        <Link to={`/item/${id}`}>{title}</Link>
        <strong>
          <span> × {quantity}</span>
        </strong>
      </td>
      <td>
        <span>{formatMoney(price * quantity)}</span>
      </td>
    </tr>
  );
};

OrderItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default OrderItem;
