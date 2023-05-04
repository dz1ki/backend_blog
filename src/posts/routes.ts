import * as express from "express";
import { authMiddleware } from "../middlewares/auth.middeleware";
import {
  addPostImage,
  createPost,
  destroy,
  destroyImage,
  updateText,
  getAllPosts,
  getPostUser,
} from "./controller";

export const post: express.IRouter = express.Router();

post.post("/create", authMiddleware, createPost);
post.post("/add_image", authMiddleware, addPostImage);
post.get("/all", getAllPosts);
post.get("/list", authMiddleware, getPostUser);
post.patch("/update_text", authMiddleware, updateText);
post.delete("/destroy_image", authMiddleware, destroyImage);
post.delete("/destroy", authMiddleware, destroy);
