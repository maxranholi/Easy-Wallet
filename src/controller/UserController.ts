import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserDTO } from "../models/User";

const userBusiness = new UserBusiness();

export class UserController {
  public async signUp(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;

      const newUser: UserDTO = {
        name,
        email,
        password,
      };

      const token = await userBusiness.signUp(newUser);
      res.status(200).send({ access_token: token });
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  public async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const token = await userBusiness.login(email, password);

      res.status(200).send({ acess_token: token });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      await userBusiness.delete(id);

      res.status(200).send(`Usuário ${id} deletado com sucesso`);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
}
