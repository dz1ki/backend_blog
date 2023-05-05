import * as express from "express";
import { user } from "./users/routes";
import { post } from "./posts/routes";
import { auth } from "./auth/router";
import { profile } from "./profile/router";

export const router: express.IRouter = express.Router();
router.use("/users", user);
router.use("/posts", post);
router.use("/auth", auth);
router.use("/profile", profile);
