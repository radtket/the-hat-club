const { importSchema } = require("graphql-import");
const { ApolloServer, makeExecutableSchema } = require("apollo-server-express");
require("dotenv").config();

const resolvers = require("./resolvers");
const db = require("./db");

const typeDefs = importSchema("./src/schema.graphql");

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  resolverValidationOptions: { requireResolversForResolveType: false },
});

const server = new ApolloServer({
  schema,
  context: req => ({ ...req, db }),
});

module.exports = server;
