import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Typography,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction,
} from "@material-ui/core";
import RemoveFromCart from "./RemoveFromCart";
import { formatMoney } from "../../utils/helpers";

const CartItem = ({ id, quantity, item: { title, image, price } }) => {
  return (
    <ListItem button>
      <ListItemAvatar>
        <Avatar alt={title} src={image} />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Box display="flex" justifyContent="space-between">
            <Typography>{title}</Typography>
            <Typography>{formatMoney(price * quantity)}</Typography>
          </Box>
        }
        secondary={
          <em>
            {quantity} &times; {formatMoney(price)} each
          </em>
        }
      />
      <ListItemSecondaryAction>
        <RemoveFromCart {...{ id }} />
      </ListItemSecondaryAction>
    </ListItem>
  );
};

CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  item: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default CartItem;
