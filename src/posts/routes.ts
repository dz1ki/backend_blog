import * as express from "express";
import { authMiddleware } from "../middlewares/auth.middeleware";
import {
  addPostImage,
  createPost,
  destroy,
  destroyImage,
  updateText,
} from "./controller";

export const post: express.IRouter = express.Router();

post.post("/create", authMiddleware, createPost);
post.patch("/update_text", authMiddleware, updateText);
post.post("/add_image_post", authMiddleware, addPostImage);
post.delete("/destroy_image_post", authMiddleware, destroyImage);
post.delete("/destroy", authMiddleware, destroy);
