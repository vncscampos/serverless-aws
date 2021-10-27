import { gql } from "apollo-server-lambda";

export const typeDefs = gql`
  type Auth {
    token: String
  }

  type Mutation {
    session(email: String, password: String): Auth
  }

  type Query {
    bool: Boolean
  }
`;
