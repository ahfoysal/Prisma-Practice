import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.get("/", UserController.getUsers);
router.post("/user", UserController.addUser);
router.post("/profile", UserController.addOrUpdateUser);

export const UserRoutes = router;
