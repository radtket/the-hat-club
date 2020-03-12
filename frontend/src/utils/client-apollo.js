import ApolloClient from "apollo-boost";
import Cookies from "universal-cookie";
import { LOCAL_STATE_QUERY } from "../reslovers/Query";

export const cookies = new Cookies();

const uri =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_LOCAL_ENDPOINT
    : process.env.REACT_APP_PROD_ENDPOINT;

console.log({ uri });

export const client = new ApolloClient({
  uri,
  credentials: "include",
  request: operation => {
    const token = (cookies && cookies.get("frontend_token")) || "";

    operation.setContext({
      credentials: "include",
      fetchOptions: {
        credentials: "include",
      },
      headers: {
        authorization: token ? `Bearer ${token}` : "",
        token,
      },
    });
  },
  // Client State
  clientState: {
    resolvers: {
      Mutation: {
        toggleCart(_, variables, { cache }) {
          // read the cartOpen calue from the cache
          const { isCartOpen } = cache.readQuery({
            query: LOCAL_STATE_QUERY,
          });

          // write the cart state to the opposite
          const data = {
            data: {
              isCartOpen: !isCartOpen,
            },
          };

          cache.writeData(data);
          return data;
        },
      },
    },
    defaults: {
      isCartOpen: false,
    },
  },
});
