import { sequelize } from "./index";
import { Sequelize, DataTypes, Model, Optional } from "sequelize";

interface usersAttributes {
  id: number;
  login: string;
  email: string;
  state: string;
  profile: string;
  accessToken: string;
  refreshToken: string;
}

type usersOptionalAttributes = "id" | "login" | "state" | "profile";

type usersCreationAttributes = Optional<
  usersAttributes,
  usersOptionalAttributes
>;

export class Users extends Model<usersAttributes, usersCreationAttributes>
  implements usersCreationAttributes {
  public readonly id!: number;
  public login!: string;
  public email!: string;
  public state!: string;
  public profile!: string;
  public accessToken!: string;
  public refreshToken!: string;

  static initModel(sequelize: Sequelize): typeof Users {
    return Users.init(
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          type: DataTypes.INTEGER,
          primaryKey: true
        },
        login: {
          type: DataTypes.STRING(45),
          allowNull: false
        },
        email: {
          type: DataTypes.STRING(100),
          allowNull: false
        },
        state: {
          type: DataTypes.STRING(45),
          allowNull: false
        },
        profile: {
          type: DataTypes.JSON,
          allowNull: false
        },
        accessToken: {
          type: DataTypes.STRING(100),
          allowNull: false
        },
        refreshToken: {
          type: DataTypes.STRING(100),
          allowNull: false
        }
      },
      {
        tableName: "Users",
        sequelize
      }
    );
  }
}
