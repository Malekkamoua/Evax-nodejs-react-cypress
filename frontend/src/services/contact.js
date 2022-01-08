import api from "../api";
const submitContact = async (email, message, token) => {
  const response = await api.post("contact", { email, message });
  return response;
};
export default submitContact;
