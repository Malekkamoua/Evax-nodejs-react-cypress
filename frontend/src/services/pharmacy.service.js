import api from "../api";

const getAllPharmacy = async (token) => {
  let data = await api.get("pharmacy/all", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data;
};

const getPharmacy = async (token, id_pharmacy) => {
  let data = await api.get("pharmacy/" + id_pharmacy, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data;
};

const addPharmacy = async (pharmacy, token) => {
  const response = await api.post("pharmacy", pharmacy, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return response;
};
const updatePharmacy = async (token, pharmacy, id_pharmacy) => {
  let data = await api.put("pharmacy/" + id_pharmacy, pharmacy, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data;
};

const deletePharmacy = async (token, id_pharmacy) => {
  let response = await api.delete("pharmacy/" + id_pharmacy, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return response;
};

export {
  addPharmacy,
  getAllPharmacy,
  deletePharmacy,
  getPharmacy,
  updatePharmacy,
};
