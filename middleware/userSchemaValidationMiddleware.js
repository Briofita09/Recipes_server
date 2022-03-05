import { userSchema } from "../schemas/userSchemas.js";

export default function userSchemaValidation(req, res, next) {
  try {
    const { error } = userSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        msg: "Algum dado digitando está faltando, digitou os dois campos?",
      });
    }
    next();
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    res.sendStatus(500);
  }
}
