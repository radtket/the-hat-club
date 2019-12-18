import React from "react";
import { useQuery } from "react-apollo";
import { format } from "date-fns";
import { Link } from "react-router-dom";

import { formatMoney } from "../utils/helpers";
import { USER_ORDERS_QUERY } from "../reslovers/Query";
import Button from "./Button";
import ErrorMessage from "./ErrorMessage";
import LoadingSpinner from "./LoadingSpinner";
import { StyledOrdersTable } from "../styles/Tables";

const OrdersTable = () => {
  const { data, loading, error } = useQuery(USER_ORDERS_QUERY);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage {...{ error }} />;
  }

  const { orders } = data;

  return (
    <StyledOrdersTable>
      <thead>
        <tr>
          <th>Order</th>
          <th>Date</th>
          <th>Status</th>
          <th>Total</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {orders.map(({ id, items, createdAt, total }) => {
          return (
            <tr key={id}>
              <td>
                <Link to={`/order/${id}`}>#{id}</Link>
              </td>
              <td>{format(new Date(createdAt), "MMM d, yyyy")}</td>
              <td>Pending</td>
              <td>{formatMoney(total)}</td>
              <td>
                <Button as={Link} to={`/order/${id}`}>
                  View
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </StyledOrdersTable>
  );
};

export default OrdersTable;
