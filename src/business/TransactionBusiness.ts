import { TransactionDatabase } from "../data/TransactionDatabase";
import { CustomError, InvalidInfos } from "../error/CustomError";
import { Transaction, TransactionDTO } from "../models/Transaction";
import { generateId } from "../services/generateId";

const transactionDatabase = new TransactionDatabase();

export class TransactionBusiness {
  async createTransaction(input: TransactionDTO) {
    try {
      const { idUser, price, title, description, type } = input;

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
