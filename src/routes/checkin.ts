import { Router } from "express";
import { createUser, getAllUsers } from "../controllers/users";
const router = Router();
router.post("/users", createUser);
router.get("/users", getAllUsers);
export default router;