import { Sequelize } from "sequelize";
import { config } from "../config/config";

const env = "development";
const { database, username, password, host, dialect } = config[env];
export const sequelize = new Sequelize(database!, username!, password, {
  host,
  dialect: "mysql", //그냥 dialect로 하면 에러남 왜인지 모르겠음
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err: Error) => {
    console.log("Unable to connect to the database:", err);
  });
