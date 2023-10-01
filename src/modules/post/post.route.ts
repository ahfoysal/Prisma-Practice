import express from "express";
import { PostController } from "./post.controller";

const router = express.Router();

router.get("/", PostController.getPosts);
// router.get("/:id", UserController.getSingleUser);
router.post("/", PostController.addPost);
// router.post("/profile", UserController.addOrUpdateUser);

export const PostRoutes = router;
