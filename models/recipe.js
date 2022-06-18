import mongoose from "mongoose";

const { Schema, model } = mongoose;

const RecipeSchema = new Schema({
  title: { type: String, required: true },
  time: { type: Number, required: true },
  content: { type: String, required: true },
  url: { type: String, required: true },
  description: { type: String },
  commentIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

const RecipeModel = model("RecipeSchema", RecipeSchema);

export default RecipeModel;
