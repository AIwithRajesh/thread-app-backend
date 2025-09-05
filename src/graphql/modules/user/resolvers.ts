import { mutation } from "./mutations.js";
import { queries } from "./queries.js";

export const resolvers = {
  Query: queries.Query,
  Mutation: mutation.Mutation,
};
