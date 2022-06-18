import Joi from "joi";

export const CommentSchema = Joi.object({
  user: Joi.string().required(),
  text: Joi.string().required(),
});
