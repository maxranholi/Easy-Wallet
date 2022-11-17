import { app } from "./app";
import { transactionRouter } from "./routes/TransactionRoutes";
import { userRouter } from "./routes/UserRoutes";

app.use("/user", userRouter)

app.use("/transaction", transactionRouter)