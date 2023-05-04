import * as express from "express";
import { authMiddleware } from "../middlewares/auth.middeleware";
import { addPost, destroy, update } from "./controller";

export const post: express.IRouter = express.Router();

post.post("/add", authMiddleware, addPost);
post.patch("/update", authMiddleware, update);
post.delete("/destroy", authMiddleware, destroy);
