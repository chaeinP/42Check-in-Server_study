import { Router } from "express";
import { router as userRoutes } from "./user";
import { createUser, getAllUsers } from "../controllers/users";

const router = Router();

router.get("/user", userRoutes);

router.post("/users", createUser);
router.get("/users", getAllUsers);

export default router;
