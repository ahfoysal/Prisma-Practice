import express from "express";
import { PostController } from "./post.controller";

const router = express.Router();

router.get("/", PostController.getPosts);
router.get("/:id", PostController.getSinglePost);
router.post("/", PostController.addPost);
router.patch("/", PostController.updatePost);
router.delete("/:id", PostController.deletePost);

export const PostRoutes = router;
