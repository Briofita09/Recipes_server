import { recipeSchema } from "../schemas/recipeSchemas.js";

export default function recipeSchemaValidation(req, res, next) {
  try {
    const { error } = recipeSchema.validate(req.body);
    if (error) {
      return res.status(400).json(error);
    }
    next();
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    res.status(500).send(err);
  }
}
