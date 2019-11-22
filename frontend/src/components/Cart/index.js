import React from "react";
import { useQuery } from "react-apollo";
import {
  CartDrawer,
  CartHeader,
  CartItems,
  CartItemsWrap,
  CartOverlay,
} from "../../styles/CartStyles";
import { CURRENT_USER_QUERY, LOCAL_STATE_QUERY } from "../../reslovers/Query";

import CartListItems from "./CartListItems";
import CartToggleButton from "./CartToggleButton";
import ErrorMessage from "../ErrorMessage";
import TakeMyMoney from "./TakeMyMoney";

const Cart = () => {
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
      <CartDrawer open={isCartOpen}>
        <div>
          <CartHeader>
            <CartToggleButton>Close</CartToggleButton>
          </CartHeader>

          <CartItemsWrap>
            <CartItems>
              <CartListItems {...me} />
            </CartItems>
          </CartItemsWrap>
          <TakeMyMoney {...me} />
        </div>
      </CartDrawer>
      <CartOverlay {...{ isCartOpen }} />
    </>
  );
};

export default Cart;
