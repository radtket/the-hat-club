import ApolloClient from "apollo-boost";
import Cookies from "universal-cookie";
import { LOCAL_STATE_QUERY } from "../reslovers/Query";

export const cookies = new Cookies();

export const client = new ApolloClient({
  uri:
    process.env.NODE_ENV === "development"
      ? process.env.REACT_APP_LOCAL_ENDPOINT
      : "https://hat-club-yoga-prod.herokuapp.com",
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
