import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserDTO } from "../models/User";

const userBusiness = new UserBusiness();

export class UserController {
  async signUp(req: Request, res: Response) {
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
}
