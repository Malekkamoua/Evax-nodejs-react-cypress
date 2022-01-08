import api from "../api";

const getAllJpo = async (token) => {
  let data = await api.get("jpo/all", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data;
};

const getJpo = async (token, id_Jpo) => {
  let data = await api.get("jpo/" + id_Jpo, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data;
};
const getJpoPopulated = async (token, id_Jpo) => {
  let data = await api.get("jpo/getJpo/" + id_Jpo, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data;
};

const addJpo = async (Jpo, token) => {
  const response = await api.post("jpo", Jpo, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return response;
};
const updateJpo = async (token, Jpo, id_Jpo) => {
  let data = await api.put("jpo/" + id_Jpo, Jpo, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data;
};

const deleteJpo = async (token, id_Jpo) => {
  let response = await api.delete("jpo/" + id_Jpo, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return response;
};

export { addJpo, getAllJpo, deleteJpo, getJpo, updateJpo, getJpoPopulated };
