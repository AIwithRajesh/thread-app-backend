import { createHmac, randomBytes } from "node:crypto";
import { prismaClient } from "../lib/db.js";

export interface userInterface {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

class UserService {
  public static createUser(payload: userInterface) {
    const { first_name, last_name, email, password } = payload;
    const salt = randomBytes(32).toString();
    const hashPassword = createHmac("sha256", salt)
      .update(password)
      .digest("hex");

    return prismaClient.user.create({
      data: {
        firstName: first_name,
        lastName: last_name,
        email,
        password: hashPassword,
      },
    });
  }
}

export default UserService;
