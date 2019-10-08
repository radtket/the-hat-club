import ApolloClient from "apollo-boost";

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
});

export default client;
