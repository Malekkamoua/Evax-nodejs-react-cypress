import api from "../api";

const register = async (citizen) => {
  let data = await api.post("auth/register", citizen);
  return data;
};

const generatePassword = async (email) => {
  let data = await api.post("auth/login-step-1", email);
  return data;
};

const login = async (credentials) => {
  console.log(credentials);
  const response = await api.post("auth/login-step-2", credentials);
  return response;
};

export { register, generatePassword, login };
