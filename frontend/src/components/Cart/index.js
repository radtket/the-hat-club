import React from "react";
import { useQuery, useMutation } from "react-apollo";
import CartStyles, { CartOverlay } from "../../styles/CartStyles";
import { CURRENT_USER_QUERY, LOCAL_STATE_QUERY } from "../../reslovers/Query";
import { TOGGLE_CART_MUTATION } from "../../reslovers/Mutation";
import TakeMyMoney from "./TakeMyMoney";
import ErrorMessage from "../ErrorMessage";
import CartList from "./CartList";

const Cart = () => {
  const [toggleCart] = useMutation(TOGGLE_CART_MUTATION);
  const { data, loading, error } = useQuery(CURRENT_USER_QUERY);
  const {
    data: { isCartOpen },
  } = useQuery(LOCAL_STATE_QUERY);

  if (loading) {
    return null;
  }

  if (error) {
    return <ErrorMessage {...{ error }} />;
  }

  const { me } = data;

  return (
    <>
      <CartStyles open={isCartOpen}>
        <div className="cart__container">
          <header>
            <button onClick={toggleCart} type="button">
              Close
            </button>
          </header>

          <div className="cart__items--wrap">
            <ul className="cart__items">
              <CartList {...me} />
            </ul>
          </div>
          <TakeMyMoney {...me} />
        </div>
      </CartStyles>
      <CartOverlay {...{ isCartOpen }} />
    </>
  );
};

export default Cart;
