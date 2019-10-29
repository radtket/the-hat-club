import React from "react";
import PropTypes from "prop-types";
import { IconButton } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { useMutation } from "react-apollo";
import { ADD_TO_CART_MUTATION } from "../../../reslovers/Mutation";
import { CURRENT_USER_QUERY } from "../../../reslovers/Query";

const AddToCart = ({ id }) => {
  const [addToCart] = useMutation(ADD_TO_CART_MUTATION, {
    variables: {
      id,
    },
    refetchQueries: () => [{ query: CURRENT_USER_QUERY }],
  });

  return (
    <IconButton aria-label="Add to Shopping Cart" onClick={addToCart}>
      <AddShoppingCart />
    </IconButton>
  );
};

AddToCart.propTypes = {
  id: PropTypes.string.isRequired,
};

export default AddToCart;
