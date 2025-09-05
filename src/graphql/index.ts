import { ApolloServer } from "@apollo/server";
import { typeDefs } from "./modules/user/typeDefs.js";
import { resolvers } from "./modules/user/resolvers.js";

export const gqlserver = new ApolloServer({
  typeDefs: [typeDefs],
  resolvers: [resolvers],
});

await gqlserver.start();
