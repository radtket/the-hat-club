import React from "react";
import { useQuery, useMutation } from "react-apollo";
import CartStyles from "../../styles/CartStyles";
import { CURRENT_USER_QUERY, LOCAL_STATE_QUERY } from "../../reslovers/Query";
import { TOGGLE_CART_MUTATION } from "../../reslovers/Mutation";
import CartItem from "./CartItem";
import TakeMyMoney from "./TakeMyMoney";

const Cart = () => {
  const [toggleCart] = useMutation(TOGGLE_CART_MUTATION);
  const { data, loading } = useQuery(CURRENT_USER_QUERY);
  const {
    data: { isCartOpen },
  } = useQuery(LOCAL_STATE_QUERY);

  if (loading) {
    return null;
  }

  if (!data.me) {
    return null;
  }

  const {
    me: { name, cart },
  } = data;

  return (
    <CartStyles open={isCartOpen}>
      <div className="cart__container">
        <header>
          <button onClick={toggleCart} type="button">
            Close
          </button>
        </header>

        <ul className="cart__items">
          {cart.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
        </ul>
        <TakeMyMoney {...data.me} />
      </div>
    </CartStyles>
  );
};

export default Cart;
