import express, { Request, Response, NextFunction } from "express";
import { models } from "./models";
import checkinRoutes from "./routes/checkin";

export const app = express();

app.use(express.json());
app.use("/", checkinRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send({ message: err.message });
});

models()
  .sync({ force: true })
  .then(() => {
    console.log("🚀 db connected");
  })
  .catch((err) => console.log(err));

app.listen(3000);
