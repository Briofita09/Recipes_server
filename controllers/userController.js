import * as userServices from "../services/userServices.js";

export async function signIn(req, res) {
  try {
    const { email, password } = req.body;

    const data = await userServices.signIn(email, password);

    if (!data) {
      return res.status(404).json({ msg: "E-mail e/ou senha inválida" });
    }

    res.sendStatus(data);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    res.sendStatus(500);
  }
}
