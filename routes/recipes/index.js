import { Router } from "express";
import * as recipeController from "../../controllers/recipescontroller.js";
import recipeSchemaValidation from "../../middleware/recipeSchemaValidationMiddleware.js";

const recipeRouter = Router();

recipeRouter.post(
  "/new-recipe",
  recipeSchemaValidation,
  recipeController.newRecipe
);
recipeRouter.get("/all-recipes", recipeController.allRecipes);
recipeRouter.get("/:recipeId/show-recipe", recipeController.getRecipe);
recipeRouter.put(
  "/:recipeId/edit-recipe",
  recipeSchemaValidation,
  recipeController.editRecipe
);
recipeRouter.delete("/:recipeId/delete-recipe", recipeController.deleteRecipe);

export default recipeRouter;
