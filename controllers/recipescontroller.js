import express from "express";

import * as recipeServices from "../services/recipeServices.js";

const recipeRouter = express.Router();

export async function newRecipe(req, res, next) {
  try {
    const data = req.body;
    const newRecipe = await recipeServices.newRecipe(data);
    return res.status(201).json(newRecipe);
  } catch (err) {
    next(err);
  }
}

export async function allRecipes(_req, res, next) {
  try {
    const recipes = await recipeServices.getRecipes();
    return res.status(200).json(recipes);
  } catch (err) {
    next(err);
  }
}

export async function editRecipe(req, res, next) {
  try {
    const { recipeId } = req.params;
    const newRecipe = { ...req.body };
    await recipeServices.editRecipe(recipeId, newRecipe);
    return res.status(200).json({ msg: "Receita alterada com sucesso" });
  } catch (err) {
    next(err);
  }
}

export async function deleteRecipe(req, res, next) {
  try {
    const { recipeId } = req.params;
    await recipeServices.deleteRecipe(recipeId);
    return res.status(200).json({ msg: "Receita deletada com sucesso" });
  } catch (err) {
    next();
  }
}

export async function getRecipe(req, res, next) {
  try {
    const { recipeId } = req.params;
    const showRecipe = await recipeServices.getOne(recipeId);
    return res.status(200).send({ showRecipe });
  } catch (err) {
    next(err);
  }
}

export default recipeRouter;
