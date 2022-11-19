import express from "express";
import { app } from "../app";
import { TransactionController } from "../controller/TransactionController";

export const transactionRouter = express.Router();
const transactionController = new TransactionController();

transactionRouter.post("/create", transactionController.createTransaction)

transactionRouter.get("/get", transactionController.getTransactions)