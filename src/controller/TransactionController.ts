import { Request, Response } from "express";
import { TransactionBusiness } from "../business/TransactionBusiness";
import { TransactionDTO } from "../models/Transaction";

const transactionBusiness = new TransactionBusiness();

export class TransactionController {
  async createTransaction(req: Request, res: Response) {
    try {
      const { idUser, price, title, description, type } = req.body;
      const token = req.headers.authorization as string;

      const newTransaction: TransactionDTO = {
        idUser,
        price,
        title,
        description,
        type,
      };

      await transactionBusiness.createTransaction(newTransaction, token);
      res.status(200).send({ data: "Transação criada!" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }

  async getTransactions(req: Request, res: Response) {
    try {
      const token = req.headers.authorization as string;

      const result = await transactionBusiness.getTransactions(token);
      res.status(200).send({ data: result });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }
}
