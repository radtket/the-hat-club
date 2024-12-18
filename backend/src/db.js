import { Prisma } from "prisma-binding";
import dotenv from "dotenv";

dotenv.config();

const db = new Prisma({
  typeDefs: "src/generated/prisma.graphql",
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: false,
});

export default db;
