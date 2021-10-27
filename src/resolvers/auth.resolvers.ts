import AuthService from "../services/AuthService";

export const resolvers = {
  Mutation: {
    session: async (context: any, args: any) => {
      try {
        const { email, password } = args;

        const authService = new AuthService();

        const token = await authService.store(email, password);

        return token;
      } catch (err) {
        return err;
      }
    },
  },
  Query: {
    bool: () => true,
  },
};
