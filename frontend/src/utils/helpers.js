import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import axios from "axios";
import { states, provinces } from "./constants";

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

export const isObjectEmpty = myObject => !Object.keys(myObject).length;

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

export const stripHtmlString = string => string.replace(/<[^>]*>?/gm, "");

export const parseHtmlEntities = string =>
  JSON.parse(string.replace(/&quot;/g, '"'));

export const getImageThumbnail = src => {
  let extension;
  switch (src) {
    case src.includes(".png"):
      extension = ".png";
      break;
    case src.includes(".jpg"):
      extension = ".jpg";
      break;
    default:
      break;
  }
  const [urlBase, query] = src.split(extension);
  return `${urlBase}_70x70_crop_center${extension}${query}`;
};

export const getApiData = (emptyArray, tag) => {
  axios("https://api.searchspring.net/api/search/search.json", {
    params: {
      resultsFormat: "native",
      siteId: `${process.env.REACT_APP_DATA_API_SITE_ID}`,
      domain: `${process.env.REACT_APP_DATA_API_ENDPOINT}/${tag}`,
      "bgfilter.collection_id": "67251073",
      userId: `${process.env.REACT_APP_DATA_API_USER_ID}`,
    },
  }).then(({ data }) => {
    data.results.forEach(async ({ url, price }) => {
      const {
        data: { product },
      } = await axios(`${url}.json?ref=tfx`, {
        Accept: "*/*",
      });

      const { title } = product;

      emptyArray.push({
        title,
        description: stripHtmlString(product.body_html),
        price: price * 100,
        tag,
        images: product.images.map(({ src }) => {
          const image = getImageThumbnail(src) || src;
          return {
            image,
            largeImage: src,
          };
        }),
      });
    });
  });
};

export const URLify = string => string.trim().replace(/\s/g, "%20");

export const formatPhoneNumber = phoneNumberString => {
  const cleaned = `${phoneNumberString}`.replace(/\D/g, "");
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return null;
};

export const convertState = state => {
  const regions = states.concat(provinces);
  const selectedState = regions.find(s =>
    s.find(x => x.toLowerCase() === state.toLowerCase())
  );
  if (selectedState) {
    return selectedState
      .filter(s => s.toLowerCase() !== state.toLowerCase())
      .join("");
  }
  return null;
};

const toRad = num => (num * Math.PI) / 180;

export const calculateDistance = (p1, p2) => {
  const R = 6378137; // Earth’s mean radius in meter
  const dLat = toRad(p2.lat() - p1.lat());
  const dLong = toRad(p2.lng() - p1.lng());
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(p1.lat())) *
      Math.cos(toRad(p2.lat())) *
      Math.sin(dLong / 2) *
      Math.sin(dLong / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return d; // returns the distance in meter
};
