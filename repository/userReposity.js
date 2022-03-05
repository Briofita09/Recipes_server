import UserModel from "../models/user.js";

export async function find(email) {
  return await UserModel.findOne({ email });
}
