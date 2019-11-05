import React from "react";
import { useQuery, useMutation } from "react-apollo";
import CartStyles from "../../styles/CartStyles";
import { CURRENT_USER_QUERY, LOCAL_STATE_QUERY } from "../../reslovers/Query";
import { TOGGLE_CART_MUTATION } from "../../reslovers/Mutation";
import CartItem from "./CartItem";
import TakeMyMoney from "./TakeMyMoney";
import { isArrayEmpty } from "../../utils/helpers";

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
    me: { cart },
  } = data;

  return (
    <CartStyles open={isCartOpen}>
      <div className="cart__container">
        <header>
          <button onClick={toggleCart} type="button">
            Close
          </button>
        </header>

        <div className="cart__items--wrap">
          <ul className="cart__items">
            {isArrayEmpty(cart) && (
              <li
                className="cart-item"
                style={{
                  textAlign: "center",
                }}
              >
                Your cart is Empty
              </li>
            )}
            {cart.map(item => (
              <CartItem key={item.id} {...item} />
            ))}
            {/* <li className="empty">No products in the cart.</li> */}
          </ul>
        </div>
        <TakeMyMoney {...data.me} />
      </div>
    </CartStyles>
  );
};

export default Cart;
