import Joi from "joi";

export const recipeSchema = Joi.object({
  title: Joi.string().required(),
  time: Joi.number().required(),
  url: Joi.string().dataUri().required(),
  content: Joi.string().required(),
  description: Joi.string().max(144),
});
