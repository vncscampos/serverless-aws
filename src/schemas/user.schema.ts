import { gql } from "apollo-server-lambda";

export const typeDefs = gql`
  type User {
      name: String,
      email: String,
      password: String
  }

  type Query {
    users: User
  }
`;
