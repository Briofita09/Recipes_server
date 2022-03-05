import Joi from "joi";

export const RecipeSchema = Joi.object({
  title: Joi.string().required(),
  url: Joi.string().dataUri().required(),
  content: Joi.string().required(),
  description: Joi.string().max(144),
});
