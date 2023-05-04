import * as express from "express";
import { user } from "./users/routes";
import { post } from "./posts/routes";

export const router: express.IRouter = express.Router();
router.use("/user", user);
router.use("/post", post);
