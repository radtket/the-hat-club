import React from "react";
import PropTypes from "prop-types";
import { useMutation } from "react-apollo";
import { ADD_TO_CART_MUTATION } from "../../../reslovers/Mutation";
import { CURRENT_USER_QUERY } from "../../../reslovers/Query";
import { CartIcon } from "../../Icons";

const AddToCart = ({ id }) => {
  const [addToCart] = useMutation(ADD_TO_CART_MUTATION, {
    variables: {
      id,
    },
    refetchQueries: () => [{ query: CURRENT_USER_QUERY }],
  });

  return (
    <button aria-label="Add to Shopping Cart" onClick={addToCart} type="button">
      <CartIcon />
    </button>
  );
};

AddToCart.propTypes = {
  id: PropTypes.string.isRequired,
};

export default AddToCart;
