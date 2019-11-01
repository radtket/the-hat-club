import { useLocation } from "react-router-dom";

export const formatMoney = amount => {
  const options = {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  };

  // if its a whole, dollar amount, leave off the .00
  if (amount % 100 === 0) {
    options.minimumFractionDigits = 0;
  }

  const formatter = new Intl.NumberFormat("en-US", options);
  return formatter.format(amount / 100);
};

export const calcTotalPrice = cart => {
  return cart.reduce((tally, { item, quantity }) => {
    if (!item) {
      return tally;
    }
    return tally + quantity * item.price;
  }, 0);
};

export const useRouteQuery = query => {
  const { search } = useLocation();
  return new URLSearchParams(search).get(query);
};

export const isArrayEmpty = arrayArg => {
  if (arrayArg && arrayArg.length) {
    return false;
  }
  return true;
};
