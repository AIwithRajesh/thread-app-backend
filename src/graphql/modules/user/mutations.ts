export const mutation = {
  Mutation: {
    createUser: async (
      _: any,
      { first_name, last_name, email, password }: any
    ) => {
      // Example resolver (replace with Prisma or DB call)
      console.log(first_name, last_name);
      return "User created successfully";
    },
  },
};
