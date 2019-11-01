import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-apollo";
import { format } from "date-fns";
import { SINGLE_ORDER_QUERY } from "../reslovers/Query";
import ErrorMessage from "../components/ErrorMessage";
import { formatMoney } from "../utils/helpers";

const Order = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(SINGLE_ORDER_QUERY, {
    variables: {
      id,
    },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <ErrorMessage {...{ error }} />;
  }

  const { order } = data;
  console.log(order.createdAt);
  return (
    <div>
      <p>
        <span>Order ID:</span>
        <span>{id}</span>
      </p>
      <p>
        <span>Charge</span>
        <span>{order.charge}</span>
      </p>
      <p>
        <span>Date</span>
        <span>{format(new Date(order.createdAt), "MMMM d, yyyy h:mm a")}</span>
      </p>
      <p>
        <span>Order Total</span>
        <span>{formatMoney(order.total)}</span>
      </p>
      <p>
        <span>Item Count</span>
        <span>{order.items.length}</span>
      </p>
      <div className="items">
        {order.items.map(item => (
          <div key={item.id} className="order-item">
            <img alt={item.title} src={item.image} />
            <div className="item-details">
              <h2>{item.title}</h2>
              <p>Qty: {item.quantity}</p>
              <p>Each: {formatMoney(item.price)}</p>
              <p>SubTotal: {formatMoney(item.price * item.quantity)}</p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
