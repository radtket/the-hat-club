import React from "react";
import { useQuery } from "react-apollo";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { formatMoney } from "../utils/helpers";
import { USER_ORDERS_QUERY } from "../reslovers/Query";
import ErrorMessage from "../components/ErrorMessage";
import Button from "../components/Button";

const Styles = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;

  th,
  td {
    padding: 14px;
    vertical-align: middle;
    font-weight: inherit;
    vertical-align: top;
    text-align: left;
  }

  tr {
    &:last-child {
      td {
        border-bottom: 1px solid #eee;
      }
    }

    td {
      border-top: 1px solid #eee;
    }
  }

  td {
    border-top: 1px solid #eee;
  }
`;

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
    <div className="container">
      <h2>You have {orders.length} orders</h2>
      <Styles>
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
                  <Button as={Link} to={`/order/${id}`}>
                    #{id}
                  </Button>
                </td>
                <td>{format(new Date(createdAt), "MMM d, yyyy")}</td>
                <td>Pending</td>
                <td>{formatMoney(total)}</td>
                <td>
                  <Button as={Button} to={`/order/${id}`}>
                    View
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Styles>
    </div>
  );
};

export default Orders;
