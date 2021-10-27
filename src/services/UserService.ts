import connection from "../database/index";
import { hash } from "bcrypt";
import { v4 as uuid } from "uuid";

class UserService {
  async create(name: String, email: String, password: string) {
    const checkUser = await connection
      .select()
      .table("users")
      .where({ email })
      .first();

    if (checkUser) {
      throw new Error("Email address already used.");
    }

    const id = uuid();

    const hashPassword = await hash(password, 8);

    await connection("users")
      .insert({
        id,
        name,
        email,
        password: hashPassword,
      })
      .catch((err) => {
        throw new Error(err);
      });

    return { name, email };
  }

  async read(id: String) {
    const result = await connection
      .select(['name', 'email'])
      .table("users")
      .where({ id })
      .first();

    if (!id) {
      throw new Error("User not found");
    }

    return result;
  }
}

export default UserService;
