import * as express from "express";
import { authMiddleware } from "../middlewares/auth.middeleware";
import {
  addPostImage,
  createPost,
  destroy,
  destroyImage,
  updateText,
  getAllPosts,
} from "./controller";

export const post: express.IRouter = express.Router();

post.post("/create", authMiddleware, createPost);
post.post("/attach-image", authMiddleware, addPostImage);
post.get("/list", getAllPosts);
post.patch("/update", authMiddleware, updateText);
post.delete("/destroy-image", authMiddleware, destroyImage);
post.delete("/destroy", authMiddleware, destroy);
