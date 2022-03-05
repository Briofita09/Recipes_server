import * as recipeRepository from "../repository/recipeRepository.js";

export async function newRecipe(data) {
  return await recipeRepository.create(data);
}

export async function getRecipes() {
  return await recipeRepository.getAll();
}

export async function getOne(recipeId) {
  return await recipeRepository.getOne(recipeId);
}

export async function editRecipe(recipeId, newRecipe) {
  return await recipeRepository.editOne(recipeId, newRecipe);
}

export async function deleteRecipe(recipeId) {
  return await recipeRepository.deleteRecipe(recipeId);
}
