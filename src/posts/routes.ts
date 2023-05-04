import * as express from "express";
import { authMiddleware } from "../middlewares/auth.middeleware";
import { addPost } from "./controller";

export const post: express.IRouter = express.Router();

post.post("/add", authMiddleware, addPost);
