import { gql } from "apollo-server-lambda";

export const typeDefs = gql`
  type User {
    name: String
    email: String
  }

  type Mutation {
    getUser(id: String): User
  }

  type Mutation {
    createUser(name: String, email: String, password: String): User
  }

  type Query {
    bool: Boolean
  }
`;
