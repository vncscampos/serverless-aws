import connection from "../database/index";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import authConfig from "../config/auth";

class AuthService {
  async store(email: string, password: string) {
    const user = await connection
      .select()
      .table("users")
      .where({ email })
      .first();

    if (!user) {
      throw new Error("User not found.");
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new Error("Incorrect password!");
    }

    const token = sign({}, authConfig.secret, {
      subject: user.id,
      expiresIn: authConfig.expiresIn,
    });

    return { token };
  }
}

export default AuthService;
