import * as dotenv from "dotenv";
dotenv.config();

export const config = {
  development: {
    username: process.env.DEV_DB_USERNAME,
    password: process.env.DEV_DB_PASSWORD,
    database: process.env.DEV_DB_NAME,
    host: "127.0.0.1",
    dialect: "mysql",
  },
  // test: {
  //   username: "root",
  //   password: process.env.DATABASE_PASSWORD,
  //   database: "42checkin_practice",
  //   host: "127.0.0.1",
  //   dialect: "mysql",
  // },
  // production: {
  //   username: "root",
  //   password: process.env.DATABASE_PASSWORD,
  //   database: "42checkin_practice",
  //   host: "127.0.0.1",
  //   dialect: "mysql",
  // },
};
