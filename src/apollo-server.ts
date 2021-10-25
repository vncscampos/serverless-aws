import { ApolloServer } from "apollo-server-lambda";

import { resolvers } from "./resolvers/users.resolvers";
import { typeDefs } from "./schemas/user.schema";

const apolloServer = new ApolloServer({ resolvers, typeDefs });

export const graphqlHandler = apolloServer.createHandler();
