import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  // CardActions,
  ButtonGroup,
  Button,
  // IconButton,
  Typography,
} from "@material-ui/core";
import { Delete, Edit, AddShoppingCart } from "@material-ui/icons";

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

      {/* <CardActions>
        <IconButton aria-label="Edit">
          <Edit />
        </IconButton>
        <IconButton aria-label="Add to Shopping Cart">
          <AddShoppingCart />
        </IconButton>
        <IconButton aria-label="Delete">
          <Delete />
        </IconButton>
      </CardActions> */}
      <ButtonGroup
        aria-label="full width outlined button group"
        fullWidth
        style={{
          borderRadius: 0,
        }}
        variant="text"
      >
        <Button
          startIcon={<Edit />}
          style={{
            borderRadius: 0,
          }}
        >
          Edit
        </Button>
        <Button
          startIcon={<AddShoppingCart />}
          style={{
            borderRadius: 0,
          }}
        >
          Add To Cart
        </Button>
        <Button
          startIcon={<Delete />}
          style={{
            borderRadius: 0,
          }}
        >
          Delete
        </Button>
      </ButtonGroup>
    </Card>
  );
};

export default ProductCard;
