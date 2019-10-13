import React from "react";
import { Link } from "react-router-dom";
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
import { useMutation } from "react-apollo";
import { DELETE_ITEM_MUTATION } from "../reslovers/Mutation";
import { ALL_ITEMS_QUERY } from "../reslovers/Query";

const ProductCard = ({ id, title, price, description, image, largeImage }) => {
  const [deleteItem, { error, loading }] = useMutation(DELETE_ITEM_MUTATION);
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
          component={Link}
          startIcon={<Edit />}
          style={{
            borderRadius: 0,
          }}
          to={`/item/${id}`}
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
          onClick={() => {
            // eslint-disable-next-line no-alert
            // eslint-disable-next-line no-restricted-globals
            if (confirm("Are you sure you want to delete this?")) {
              deleteItem({
                variables: {
                  id,
                },
                update(store, { data }) {
                  const { items } = store.readQuery({ query: ALL_ITEMS_QUERY });

                  console.log({ store });

                  // 3. Put the items back!
                  store.writeQuery({
                    query: ALL_ITEMS_QUERY,
                    data: items.filter(item => item.id !== data.deleteItem.id),
                  });
                },
              });
            }
          }}
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
