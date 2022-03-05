import { Router } from "express";
import * as userController from "../../controllers/userController.js";
import userSchemaValidation from "../../middleware/userSchemaValidationMiddleware.js";

const userRouter = Router();

userRouter.post("/login", userSchemaValidation, userController.signIn);

export default userRouter;
