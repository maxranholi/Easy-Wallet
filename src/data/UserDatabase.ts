import BaseDatabase from "./BaseDatabase";
import { User } from "../models/User";

export class UserDatabase extends BaseDatabase {
  public async signUp(user: User) {
    await BaseDatabase.connection("Ew_users").insert({
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
    });
  }

  public async login(email: string) {
    const result = await BaseDatabase.connection("Ew_users")
      .select()
      .where({ email });

    return result[0];
  }

  public async delete(email: string, password: string) {
    await BaseDatabase.connection("Ew_users")
      .where({ email: email, password: password })
      .del();
  }
}
