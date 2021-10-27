import UserService from "../services/UserService";

export const resolvers = {
  Mutation: {
    getPhoto: async (context: any, args: any) => {
      try {
        const { id } = args;

        const userService = new UserService();

        const user = await userService.read(id);

        return user;
      } catch (err) {
        return err;
      }
    },
    createPhoto: async (context: any, args: any) => {
      try {
        const { name, subtitle, user_id } = args;

        const userService = new UserService();

        const user = await userService.create(name, subtitle, user_id);

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
