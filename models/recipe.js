import mongoose from "mongoose";

const { Schema, model } = mongoose;

const RecipeSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  url: { type: String, required: true },
  description: { type: String },
});

const RecipeModel = model("RecipeSchema", RecipeSchema);

export default RecipeModel;
