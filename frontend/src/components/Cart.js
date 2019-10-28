import React from "react";
import {
  makeStyles,
  useTheme,
  Drawer,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import { Inbox, Close } from "@material-ui/icons";

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

const Cart = ({ isCartOpen, setCartOpen }) => {
  const { drawerPaper, drawer, drawerHeader } = useStyles();
  const theme = useTheme();
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
        <IconButton
          onClick={() => {
            setCartOpen(false);
          }}
        >
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
