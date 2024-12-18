import { Prisma } from "prisma-binding";
import dotenv from "dotenv";

dotenv.config();

const db = new Prisma({
  typeDefs: "backend/src/generated/prisma.graphql",
  endpoint: process.env.VITE_APP_PRISMA_ENDPOINT,
  secret: process.env.VITE_APP_PRISMA_SECRET,
  debug: false,
});

export default db;
