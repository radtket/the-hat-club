import React from "react";
import {
  makeStyles,
  Drawer,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import { Inbox, Close } from "@material-ui/icons";
import { useQuery, useMutation } from "react-apollo";
import { LOCAL_STATE_QUERY } from "../reslovers/Query";
import { TOGGLE_CART_MUTATION } from "../reslovers/Mutation";

const cartDrawerWidth = 600;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: cartDrawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: cartDrawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
}));

const Cart = () => {
  const { drawerPaper, drawer, drawerHeader } = useStyles();
  const [toggleCart] = useMutation(TOGGLE_CART_MUTATION);
  const {
    data: { isCartOpen },
  } = useQuery(LOCAL_STATE_QUERY);
  return (
    <Drawer
      anchor="right"
      classes={{
        paper: drawerPaper,
      }}
      className={drawer}
      open={isCartOpen}
      variant="persistent"
    >
      <div className={drawerHeader}>
        <IconButton onClick={toggleCart}>
          <Close />
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <Inbox />
          </ListItemIcon>
          <ListItemText primary="test" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <Inbox />
          </ListItemIcon>
          <ListItemText primary="test" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Cart;
