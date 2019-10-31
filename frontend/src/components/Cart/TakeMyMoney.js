import React from "react";
import StripeCheckout from "react-stripe-checkout";
import PropTypes from "prop-types";
import { useMutation } from "@apollo/react-hooks";
import { calcTotalPrice } from "../../utils/helpers";
import { CURRENT_USER_QUERY } from "../../reslovers/Query";

const totalItems = cart => {
  cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0);
};

const TakeMyMoney = ({ cart, email }) => {
  const onToken = res => {
    console.log({ res });
  };

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
      <h1>Take my </h1>
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
