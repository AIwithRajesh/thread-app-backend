import UserService, { type userInterface } from "../../../services/user.js";

export const mutation = {
  Mutation: {
    createUser: async (_: any, payload: userInterface) => {
      console.log(payload);
      const res = await UserService.createUser(payload);
      return res.id;
    },
  },
};
