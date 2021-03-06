import UserService from "../services/UserService";

export const resolvers = {
  Mutation: {
    getUser: async (context: any, args: any) => {
      try {
        const { id } = args;

        const userService = new UserService();

        const user = await userService.read(id);

        return user;
      } catch (err) {
        return err;
      }
    },
    createUser: async (context: any, args: any) => {
      try {
        const { name, email, password } = args;

        const userService = new UserService();

        const user = await userService.create(name, email, password);

        return user;
      } catch (err) {
        return err;
      }
    },
  },
  Query: {
    bool: () => true,
  },
};
