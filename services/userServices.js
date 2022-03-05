import * as userRepository from "../repository/userReposity.js";

export async function signIn(email, password) {
  const data = userRepository.find(email);

  if (password !== data.password) {
    return null;
  }

  return data;
}
