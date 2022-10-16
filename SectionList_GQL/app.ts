require("dotenv").config();
import express from "express";
import { ApolloServer } from "apollo-server-express";

const PORT = process.env.PORT ?? "default ne";
const MONGO_URI = process.env.MONGO_URI ?? "default ne";

import mongoose from "mongoose";

// load schema & resolver
import typeDefs from "./src/schema/schema";
import resolvers from "./src/resolver/resolver";

// connect to mongodb
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log(`connected mongodb at ${MONGO_URI}`);
  } catch (error) {
    console.log("error", error);
  }
};

connectDB();

// create instance ApolloServer
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
const app = express();

const startApp = async () => {
  // create app
  await server.start();
  server.applyMiddleware({ app });

  app.listen({ port: PORT }, () => {
    console.log(
      `server start at http://localhost:${PORT}${server.graphqlPath}`
    );
  });
};

startApp();
