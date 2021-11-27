import { RequestHandler } from "express";
import { Users } from "../models/users";

export const createUser: RequestHandler = async (req, res) => {
  try {
    const { username, image, userStatus } = req.body as {
      username: string;
      image: string;
      userStatus: string;
    };
    const [user, created] = await Users.findOrCreate({
      where: { username },
      defaults: {
        username,
        image,
        userStatus,
      },
    });
    if (created)
      res
        .status(201)
        .json({ message: "registered new user", createdTodo: user });
    else
      res
        .status(200)
        .json({ message: "The user already exists.", userInfo: user });
  } catch {
    res.status(500).json({ message: "Error" });
  }
};

export const getAllUsers: RequestHandler = async (req, res) => {
  const userList = await Users.findAll();
  res.status(201).json({ message: "success", userList });
};
