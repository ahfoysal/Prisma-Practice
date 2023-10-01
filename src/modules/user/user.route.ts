import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.get("/", UserController.getUsers);
router.get("/:id", UserController.getSingleUser);
router.post("/", UserController.addUser);
router.post("/profile", UserController.addOrUpdateUser);

export const UserRoutes = router;
