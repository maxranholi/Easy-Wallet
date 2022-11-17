import { TransactionDatabase } from "../data/TransactionDatabase";
import {
  CustomError,
  InvalidAuthenticatorData,
  InvalidInfos,
  InvalidToken,
} from "../error/CustomError";
import { Transaction, TransactionDTO } from "../models/Transaction";
import { generateId } from "../services/generateId";
import { TokenGenerator } from "../services/TokenGenerator";

const transactionDatabase = new TransactionDatabase();
const tokenGenerator = new TokenGenerator();

export class TransactionBusiness {
  async createTransaction(input: TransactionDTO, token: string) {
    try {
      const { idUser, price, title, description, type } = input;

      if (!token) {
        throw new InvalidToken();
      }

      const authData = tokenGenerator.getData(token);

      if (!authData.id) {
        throw new InvalidAuthenticatorData();
      }

      if (!idUser || !price || !title || !description || !type) {
        throw new InvalidInfos();
      }

      const id = generateId();

      const newTransaction: Transaction = {
        idTransaction: id,
        idUser,
        price,
        title,
        description,
        type,
      };

      await transactionDatabase.createTransaction(newTransaction);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  }
}
