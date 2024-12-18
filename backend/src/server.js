import { importSchema } from "graphql-import";
import { ApolloServer, makeExecutableSchema } from "apollo-server-express";
import dotenv from "dotenv";
import resolvers from "./resolvers/index.js";
import db from "./db.js";

const typeDefs = importSchema("./backend/src/schema.graphql");

dotenv.config();

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  resolverValidationOptions: { requireResolversForResolveType: false },
});

const server = new ApolloServer({
  schema,
  context: req => {
    return {
      ...req,
      db,
    };
  },
  cors: false,
  introspection: true,
  playground: true,
});

export default server;
