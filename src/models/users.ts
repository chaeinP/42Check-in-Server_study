import { Sequelize, DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "./index";

interface usersAttributes {
  id: number;
  username: string;
  image: string;
  userStatus: string;
}

type usersOptionalAttributes = "id" | "username" | "image" | "userStatus";

export type usersCreationAttributes = Optional<
  usersAttributes,
  usersOptionalAttributes
>;

export class Users
  extends Model<usersAttributes, usersCreationAttributes>
  implements usersCreationAttributes
{
  public readonly id!: number;
  public username!: string;
  public image!: string;
  public userStatus!: string;

  static initModel(sequelize: Sequelize): typeof Users {
    Users.init(
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          type: DataTypes.INTEGER,
          primaryKey: true,
        },
        username: {
          type: DataTypes.STRING(45),
          allowNull: false,
        },
        image: {
          type: DataTypes.STRING(256),
          allowNull: false,
        },
        userStatus: {
          type: DataTypes.STRING(45),
          allowNull: false,
        },
      },
      {
        modelName: "Users",
        sequelize,
        timestamps: true,
        deletedAt: true,
        paranoid: true,
      }
    );
    return Users;
  }
}
