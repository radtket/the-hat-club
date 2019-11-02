import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-apollo";
import { format } from "date-fns";
import { Grid, List, ListItem, ListItemText } from "@material-ui/core";
import { SINGLE_ORDER_QUERY } from "../reslovers/Query";
import ErrorMessage from "../components/ErrorMessage";
import OrderItem from "../components/OrderItem";

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

  return (
    <Grid container spacing={6}>
      <Grid item xs={6}>
        {order.items.map(item => (
          <OrderItem key={item.id} {...item} />
        ))}
      </Grid>
      <Grid item xs={6}>
        <List
          subheader={`Ordered ${format(
            new Date(order.createdAt),
            "MMM d, yyyy h:mm a"
          )}`}
        >
          <ListItem>
            <ListItemText primary="Order ID:" secondary={id} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Charge #:" secondary={order.charge} />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Item Count:"
              secondary={order.items.length}
            />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};

export default Order;
