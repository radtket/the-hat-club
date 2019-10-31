import React from "react";
import {
  makeStyles,
  Drawer,
  IconButton,
  Divider,
  List,
  ListSubheader,
  Typography,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { useQuery, useMutation } from "react-apollo";
import { CURRENT_USER_QUERY, LOCAL_STATE_QUERY } from "../../reslovers/Query";
import { TOGGLE_CART_MUTATION } from "../../reslovers/Mutation";
import CartItem from "./CartItem";
import TakeMyMoney from "./TakeMyMoney";

const cartDrawerWidth = 600;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: cartDrawerWidth,
    flexShrink: 0,
  },
  paper: {
    width: cartDrawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "space-between",
  },
}));

const Cart = () => {
  const { paper, drawer, drawerHeader } = useStyles();
  const [toggleCart] = useMutation(TOGGLE_CART_MUTATION);
  const { data, loading } = useQuery(CURRENT_USER_QUERY);
  const {
    data: { isCartOpen },
  } = useQuery(LOCAL_STATE_QUERY);

  if (loading) {
    return null;
  }

  if (!data.me) {
    return null;
  }

  const {
    me: { name, cart },
  } = data;

  return (
    <Drawer
      anchor="right"
      classes={{
        paper,
      }}
      className={drawer}
      open={isCartOpen}
      variant="persistent"
    >
      <div className={drawerHeader}>
        <Typography>{name}'s Cart</Typography>
        <IconButton onClick={toggleCart}>
          <Close />
        </IconButton>
      </div>
      <Divider />
      <List
        subheader={
          <ListSubheader component="div">
            You Have <strong>{cart.length}</strong> Item
            {cart.length === 1 ? "" : "s"} in your cart.
          </ListSubheader>
        }
      >
        {cart.map(item => (
          <CartItem key={item.id} {...item} />
        ))}
      </List>
      <TakeMyMoney {...data.me} />
    </Drawer>
  );
};

export default Cart;
