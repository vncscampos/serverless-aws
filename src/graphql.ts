import { makeExecutableSchema } from "graphql-tools";

import { resolvers as UserResolver } from "./resolvers/users.resolvers";
import { resolvers as AuthResolver } from "./resolvers/auth.resolvers";

import { typeDefs as UserSchema } from "./schemas/user.schema";
import { typeDefs as AuthSchema } from "./schemas/auth.schema";

// const resolvers = [__dirname + "/resolvers/*.resolvers.ts"];
// const typeDefs = [__dirname + "/schema/*.schema.ts"];

export default makeExecutableSchema({
  resolvers: [UserResolver, AuthResolver],
  typeDefs: [UserSchema, AuthSchema],
});
