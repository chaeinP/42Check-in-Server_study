import express, { Request, Response, NextFunction } from "express";
import checkinRoutes from "./routes/checkin";
import { sequelize } from "./models/index";
import { Users } from "./models/users";
export const app = express();

app.use(express.json());
app.use("/", checkinRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send({ message: err.message });
});

app.listen(3000, () => {
  Users.initModel(sequelize)
    .sync({ force: false })
    .then((v) => {
      try {
        app.emit("dbconnected");
        console.log("🚀 db connected");
      } catch (error) {
        console.log(error);
      }
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
});
