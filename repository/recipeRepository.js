import InvalidIdError from "../errors/invalidIdErrors.js";
import RecipeModel from "../models/recipe.js";

export async function create(data) {
  return await RecipeModel.create(data);
}

export async function getAll() {
  return await RecipeModel.find();
}

export async function getOne(recipeId) {
  try {
    return await RecipeModel.findOne({ _id: recipeId });
  } catch (err) {
    throw new InvalidIdError(err.message);
  }
}

export async function editOne(recipeId, newRecipe) {
  try {
    return await RecipeModel.findByIdAndUpdate(
      { _id: recipeId },
      { $set: newRecipe }
    );
  } catch (err) {
    throw new InvalidIdError(err.message);
  }
}

export async function deleteRecipe(recipeId) {
  try {
    return await RecipeModel.deleteOne({ _id: recipeId });
  } catch (err) {
    throw new InvalidIdError(err.message);
  }
}
