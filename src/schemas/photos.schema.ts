import { gql } from "apollo-server-lambda";

export const typeDefs = gql`
  type Photo {
    name: String
    subtitle: String
    link: String
    user_id: String
  }

  type Mutation {
    getPhoto(id: String): Photo
  }

  type Mutation {
    createPhoto(name: String, subtitle: String, user_id: String): Photo
  }

  type Query {
    bool: Boolean
  }
`;
