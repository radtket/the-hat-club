import React from "react";
import { useQuery } from "react-apollo";
import { formatDistance } from "date-fns";
import { Link } from "react-router-dom";
import { formatMoney } from "../utils/helpers";
import { USER_ORDERS_QUERY } from "../reslovers/Query";
import ErrorMessage from "../components/ErrorMessage";

const Orders = () => {
  const { data, loading, error } = useQuery(USER_ORDERS_QUERY);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <ErrorMessage {...{ error }} />;
  }

  const { orders } = data;

  return (
    <div>
      <h2>You have {orders.length} orders</h2>
      {orders.map(({ id, items, createdAt, total }) => {
        return (
          <Link key={id} to={`/order/${id}`}>
            <div className="order-meta">
              <p>{items.reduce((a, b) => a + b.quantity, 0)} Items</p>
              <p>{items.length} Products</p>
              <p>{formatDistance(new Date(createdAt), new Date())}</p>
              <p>{formatMoney(total)}</p>
            </div>
            <div className="images">
              {items.map(item => (
                <img key={item.id} alt={item.title} src={item.image} />
              ))}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Orders;
