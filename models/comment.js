import mongoose from "mongoose";

const { Schema, model } = mongoose;

const CommentSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  text: { type: String, required: true },
  recpideId: { type: mongoose.Schema.Types.ObjectId, ref: "RecipeSchema" },
});

const CommentModel = model("Comment", CommentSchema);

export default CommentModel;
