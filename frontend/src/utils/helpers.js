import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

export const useTheme = () => useContext(ThemeContext);

export const spacing = arg => `${arg * 6}px`;

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

export const hexToRgb = hex => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

export const rgba = (hex, opacity) => {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
