import { importSchema } from "graphql-import";
import { ApolloServer, makeExecutableSchema } from "apollo-server-express";
import dotenv from "dotenv";
import resolvers from "./resolvers";
import db from "./db";

const typeDefs = importSchema("./src/schema.graphql");

dotenv.config();

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  resolverValidationOptions: { requireResolversForResolveType: false },
});

const server = new ApolloServer({
  schema,
  context: req => ({ ...req, db }),
  cors: false,
  introspection: true,
  playground: true,
});

export default server;
