import { ApolloServer } from "apollo-server-lambda";

import { resolvers as UserResolver } from "./resolvers/users.resolvers";
import { resolvers as AuthResolver } from "./resolvers/auth.resolvers";

import { typeDefs as UserSchema } from "./schemas/user.schema";
import { typeDefs as AuthSchema } from "./schemas/auth.schema";

const apolloServer = new ApolloServer({
  resolvers: [UserResolver, AuthResolver],
  typeDefs: [UserSchema, AuthSchema],
  formatError: (error) => error,
  formatResponse: (response: any) => response,
  context: ({ event, context }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context,
  }),
});

export const graphqlHandler = apolloServer.createHandler();
