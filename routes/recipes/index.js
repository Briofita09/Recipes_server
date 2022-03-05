import { Router } from "express";
import * as recipeController from "../../controllers/recipescontroller.js";

const recipeRouter = Router();

recipeRouter.post("/new-recipe", recipeController.newRecipe);
recipeRouter.get("/all-recipes", recipeController.allRecipes);
recipeRouter.get("/:recipeId/show-recipe", recipeController.getRecipe);
recipeRouter.put("/:recipeId/edit-recipe", recipeController.editRecipe);
recipeRouter.delete("/:recipeId/delete-recipe", recipeController.deleteRecipe);

export default recipeRouter;
