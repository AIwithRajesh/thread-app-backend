import { createHmac, randomBytes } from "node:crypto";
import { prismaClient } from "../lib/db.js";
import JWT from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "@JWT_TOKEN";

export interface userInterface {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

interface GetUserTokenPayload {
  email: string;
  password: string;
}

class UserService {
  private static generateHash(salt: string, password: string) {
    const hashedPassword = createHmac("sha256", salt)
      .update(password)
      .digest("hex");
    return hashedPassword;
  }

  public static createUser(payload: userInterface) {
    const { first_name, last_name, email, password } = payload;
    const salt = randomBytes(32).toString();
    const hashedPassword = this.generateHash(salt, password);

    return prismaClient.user.create({
      data: {
        firstName: first_name,
        lastName: last_name,
        email,
        password: hashedPassword,
        salt,
      },
    });
  }

  private static getUserByEmail(email: string) {
    return prismaClient.user.findUnique({ where: { email } });
  }

  public static async getUserToken(payload: GetUserTokenPayload) {
    const { email, password } = payload;
    const user = await UserService.getUserByEmail(email);

    if (!user) throw new Error("User not found");
    const userSalt = user?.salt || "";
    const hashedPassword = this.generateHash(userSalt, password);
    console.log(hashedPassword, user.password);
    if (hashedPassword !== user.password) {
      throw new Error("Incorrect Password");
    }

    return JWT.sign({ id: user.id, email: user.email }, JWT_SECRET);
  }
}

export default UserService;
