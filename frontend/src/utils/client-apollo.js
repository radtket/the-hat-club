import ApolloClient from "apollo-boost";
import { LOCAL_STATE_QUERY } from "../reslovers/Query";

const client = new ApolloClient({
  uri:
    process.env.NODE_ENV === "development"
      ? process.env.REACT_APP_LOCAL_ENDPOINT
      : process.env.REACT_APP_PRISMA_ENDPOINT,
  request: operation => {
    operation.setContext({
      fetchOptions: {
        credentials: "include",
      },
      // headers,
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
      isCartOpen: true,
    },
  },
});

export default client;
