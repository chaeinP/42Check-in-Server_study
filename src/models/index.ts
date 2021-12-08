import { Users } from "./users";
import { Sequelize, Dialect } from "sequelize";
import env from "../config/config";

const { host, port, username, password, name } = env.db;
export const sequelize = new Sequelize(name!, username!, password, {
  host,
  dialect: "mysql",
  port,
  dialectOptions: {
    charset: "utf8mb4",
    dateStrings: true,
    typeCast: true
  },
  timezone: "+09:00",
  define: {
    timestamps: true,
    deletedAt: true,
    paranoid: true
  }
});

export function models() {
  Users.initModel(sequelize);
  return sequelize;
}
