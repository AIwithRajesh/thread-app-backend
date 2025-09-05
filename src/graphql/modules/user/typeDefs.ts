import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Query {
    hello: String!
  }
  type Mutation {
    _: Boolean
  }
  type User {
    first_name: String!
    last_name: String!
    email: String!
    password: String!
  }
  extend type Mutation {
    createUser(
      first_name: String!
      last_name: String!
      email: String!
      password: String!
    ): String!
  }
`;
