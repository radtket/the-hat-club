import { useLocation } from "react-router-dom";

export const formatMoney = amount => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
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

export const asyncMap = async (array, callback) => {
  const results = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const item of array) {
    // eslint-disable-next-line no-await-in-loop
    results.push(await callback(item));
  }

  return results;
};
