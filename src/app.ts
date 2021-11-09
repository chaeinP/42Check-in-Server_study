import express, { Request, Response, NextFunction } from "express";

import todoRoutes from "./routes/todos";

export const app = express();

app.use(express.json());
app.use("/todos", todoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send({ message: err.message });
});

app.listen(3000);
