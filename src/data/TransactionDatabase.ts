import BaseDatabase from "./BaseDatabase";
import { Transaction } from "../models/Transaction";

export class TransactionDatabase extends BaseDatabase {
  public async createTransaction(transaction: Transaction) {
    await TransactionDatabase.connection("Ew_users_transaction").insert({
      id_transaction: transaction.idTransaction,
      id_user: transaction.idUser,
      price: transaction.price,
      title: transaction.title,
      description: transaction.description,
      type: transaction.type,
    });
  }
}
