import { Users } from "./users";
import { Sequelize, Dialect } from "sequelize";
import { config } from "../config/config";

const env = undefined || "development";
const { database, username, password, host, dialect } = config[env] as {
  database: string;
  username: string;
  password: string;
  host: string;
  dialect: Dialect;
};
export const sequelize = new Sequelize(database!, username!, password, {
  host,
  dialect,
  dialectOptions: {
    charset: "utf8mb4",
    dateStrings: true, // ! 데이터 로드시 문자열로 가저옴
    typeCast: true, // ! 타임존을 역으로 계산하지 않음
  },
  timezone: "+09:00",
  define: {
    timestamps: true,
    deletedAt: true,
    paranoid: true,
  },
});

export function models() {
  Users.initModel(sequelize);
  return sequelize;
}
