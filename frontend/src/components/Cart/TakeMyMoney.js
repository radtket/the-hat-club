import React, { useContext } from "react";
import StripeCheckout from "react-stripe-checkout";
import PropTypes from "prop-types";
import { useMutation } from "@apollo/react-hooks";
import { Button } from "@material-ui/core";
import { calcTotalPrice, isArrayEmpty } from "../../utils/helpers";
import { CURRENT_USER_QUERY } from "../../reslovers/Query";
import { CREATE_ORDER_MUTATION } from "../../reslovers/Mutation";
import { StatusSnackbarContext } from "../StatusSnackbar";

const totalItems = cart => {
  cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0);
};

const TakeMyMoney = ({ cart, email }) => {
  const { openSnackbar } = useContext(StatusSnackbarContext);
  const [createOrder, { loading }] = useMutation(CREATE_ORDER_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  const onToken = res => {
    createOrder({
      variables: {
        token: res.id,
      },
    }).catch(({ message }) => {
      openSnackbar({
        message,
        variant: "error",
      });
    });
  };

  if (isArrayEmpty(cart)) {
    return null;
  }

  return (
    <StripeCheckout
      amount={calcTotalPrice(cart)}
      currency="USD"
      description={`Order of ${totalItems(cart)} items!`}
      email={email}
      image={cart[0].item && cart[0].item.image}
      name="Sick Fits"
      stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
      token={res => onToken(res)}
    >
      <Button disabled={loading} variant="contained">
        Take my Money
      </Button>
    </StripeCheckout>
  );
};

TakeMyMoney.propTypes = {
  email: PropTypes.string.isRequired,
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      quantity: PropTypes.number,
      item: PropTypes.shape({
        description: PropTypes.string,
        id: PropTypes.string,
        image: PropTypes.string,
        price: PropTypes.number,
        title: PropTypes.string,
      }),
    })
  ),
};

TakeMyMoney.defaultProps = {
  cart: [],
};

export default TakeMyMoney;
