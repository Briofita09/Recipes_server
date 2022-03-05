import { Router } from "express";
import userRouter from "./user/index.js";
import recipeRouter from "./recipes/index.js";

const router = Router();

router.use("/api", userRouter);
router.use("/api", recipeRouter);

export default router;
