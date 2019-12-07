import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-apollo";
import { format } from "date-fns";
import { SINGLE_ORDER_QUERY } from "../reslovers/Query";
import {
  ErrorMessage,
  LoadingSpinner,
  OrderItem,
  SectionSmall,
} from "../components";
import OrderStyles from "../styles/OrderStyles";

const Order = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(SINGLE_ORDER_QUERY, {
    variables: {
      id,
    },
  });

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage {...{ error }} />;
  }

  const { order } = data;
  return (
    <SectionSmall>
      <div
        className="container"
        style={{
          maxWidth: "900px",
        }}
      >
        <OrderStyles className="order-details">
          <header>
            <ul>
              <li>
                Order number: <strong>#{id}</strong>
              </li>

              <li>
                Date:{" "}
                <strong>
                  {format(new Date(order.createdAt), "MMM d, yyyy h:mm a")}
                </strong>
              </li>

              <li>
                Total:
                <strong>
                  <span>306.00</span>
                </strong>
              </li>

              <li>
                Charge: <strong>#{order.charge}</strong>
              </li>
            </ul>
          </header>
          <h2>Order details</h2>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              {order.items.map(item => (
                <OrderItem key={item.id} {...item} />
              ))}
            </tbody>

            <tfoot>
              <tr>
                <th scope="row">Subtotal:</th>
                <td>
                  <span>
                    <span>$</span>
                    379.00
                  </span>
                </td>
              </tr>
              <tr>
                <th scope="row">Shipping:</th>
                <td>
                  <span>
                    <span>$</span>
                    10.00
                  </span>
                  &nbsp;<small>via Standard</small>
                </td>
              </tr>
              <tr>
                <th scope="row">Payment method:</th>
                <td>Check payments</td>
              </tr>
              <tr>
                <th scope="row">Total:</th>
                <td>
                  <span>
                    <span>$</span>
                    {order.total}
                  </span>
                </td>
              </tr>
            </tfoot>
          </table>
        </OrderStyles>
      </div>
    </SectionSmall>
  );
};

export default Order;
