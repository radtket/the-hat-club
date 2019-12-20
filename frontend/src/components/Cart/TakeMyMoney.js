import React from "react";
import { useHistory } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import PropTypes from "prop-types";
import { useMutation } from "@apollo/react-hooks";
import notifier from "simple-react-notifications";
import { calcTotalPrice, formatMoney, isArrayEmpty } from "../../utils/helpers";
import { CURRENT_USER_QUERY } from "../../reslovers/Query";
import {
  CREATE_ORDER_MUTATION,
  TOGGLE_CART_MUTATION,
} from "../../reslovers/Mutation";
import Button from "../Button";
import { CartFooter } from "../../styles/CartStyles";

const totalItems = cart => {
  cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0);
};

const TakeMyMoney = ({ cart, email }) => {
  const { push } = useHistory();
  const [toggleCart] = useMutation(TOGGLE_CART_MUTATION);
  const [createOrder, { loading }] = useMutation(CREATE_ORDER_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  const onToken = res => {
    createOrder({
      variables: {
        token: res.id,
      },
    })
      .then(({ data }) => {
        toggleCart();
        push(`/order/${data.createOrder.id}`);
      })
      .catch(({ message }) => {
        notifier.error(message);
      });
  };

  if (isArrayEmpty(cart)) {
    return null;
  }

  return (
    <CartFooter>
      <dl>
        <dt>Subtotal:</dt>
        <dd>{formatMoney(calcTotalPrice(cart))}</dd>
      </dl>
      <nav>
        <Button
          border="white"
          onClick={e => {
            e.preventDefault();
            toggleCart();
            push("/cart");
          }}
          size="lg"
          type="button"
        >
          View Cart
        </Button>
        <StripeCheckout
          amount={calcTotalPrice(cart)}
          currency="USD"
          description={`Order of ${totalItems(cart)} items!`}
          disabled={loading}
          email={email}
          image={cart[0].item && cart[0].item.images[0].image}
          name="Sick Fits"
          stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
          token={res => onToken(res)}
        >
          <Button size="lg" type="button">
            Checkout
          </Button>
        </StripeCheckout>
      </nav>
    </CartFooter>
  );
};

TakeMyMoney.propTypes = {
  email: PropTypes.string,
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
  email: "",
  cart: [],
};

export default TakeMyMoney;
