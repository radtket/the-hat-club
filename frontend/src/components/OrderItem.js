import React from "react";
import PropTypes from "prop-types";
import {
  makeStyles,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { formatMoney } from "../utils/helpers";

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

const OrderItem = ({ title, description, price, image, quantity }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.cover} image={image} title={title} />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {title}
          </Typography>
          <Typography color="textSecondary" variant="subtitle1">
            {description}
          </Typography>
          <Typography color="textSecondary" variant="subtitle1">
            Qty: {quantity}
          </Typography>
          <Typography color="textSecondary" variant="subtitle1">
            Each: {formatMoney(price)}
          </Typography>
          <Typography color="textSecondary" variant="subtitle1">
            SubTotal: {formatMoney(price * quantity)}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};

OrderItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default OrderItem;
