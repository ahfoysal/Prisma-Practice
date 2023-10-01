import express from "express";
import { CategoryController } from "./category.controller";

const router = express.Router();

// router.get("/", UserController.getUsers);
// router.get("/:id", UserController.getSingleUser);
router.post("/", CategoryController.addCategory);
// router.post("/profile", UserController.addOrUpdateUser);

export const CategoryRoutes = router;
