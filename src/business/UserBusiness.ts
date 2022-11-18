import { UserDatabase } from "../data/UserDatabase";
import { UserDTO } from "../models/User";
import { generateId } from "../services/generateId";
import { HashManager } from "../services/HashManager";
import { User } from "../models/User";
import { TokenGenerator } from "../services/TokenGenerator";

const userDatabase = new UserDatabase();
const hashManager = new HashManager();
const tokenGenerator = new TokenGenerator();

export class UserBusiness {
  async signUp(user: UserDTO) {
    try {
      const { name, email, password } = user;

      const id = generateId();

      const hashPassword: string = await hashManager.hash(user.password);

      const newUser: User = {
        id,
        name: user.name,
        email: user.email,
        password: hashPassword,
      };

      await userDatabase.signUp(newUser);
      const token = tokenGenerator.generateToken({ id });

      return token;
    } catch (error) {
      return error.message;
    }
  }

  async login(name: string, password: string) {
    try {
      const user = await userDatabase.login(name);

      if (!name) {
        throw new Error("nome inválido");
      }

      const isValidPassword = await hashManager.compare(
        password,
        user.password
      );

      if (!isValidPassword) {
        throw new Error("Senha inválida");
      }

      const token = tokenGenerator.generateToken({ id: user.id });

      return token;
    } catch (error) {
      return error.message;
    }
  }
}
