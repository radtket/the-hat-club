import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
} from "@material-ui/core";

// Actions
import AddToCart from "./actions/AddToCart";
import DeleteItem from "./actions/DeleteItem";
import EditItem from "./actions/EditItem";

const ProductCard = ({ id, title, price, description, image, largeImage }) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          {...{ title, image }}
          style={{
            height: 450,
          }}
        />
        <CardContent>
          <Typography component="h2" gutterBottom variant="h5">
            {title}
          </Typography>
          <Typography color="textSecondary" component="p" variant="body2">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <AddToCart {...{ id }} />
        <DeleteItem {...{ id }} />
        <EditItem {...{ id }} />
      </CardActions>
    </Card>
  );
};

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
};

export default ProductCard;
