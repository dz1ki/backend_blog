import * as express from "express";
import { authMiddleware } from "../middlewares/auth.middeleware";
import {
  updatePassword,
  updateUser,
  dropUser,
  getPostUser,
} from "./controller";

export const profile: express.IRouter = express.Router();

profile.patch("/update", authMiddleware, updateUser);
profile.put("/change-password", authMiddleware, updatePassword);
profile.get("/posts", authMiddleware, getPostUser);
profile.delete("/destroy", authMiddleware, dropUser);
