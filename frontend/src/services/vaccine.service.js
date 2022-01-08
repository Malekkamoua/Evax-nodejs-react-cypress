import api from "../api";

const getAllVaccine = async (token) => {
  let data = await api.get("vaccine/all", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data;
};

const getVaccine = async (token, id_vaccine) => {
  let data = await api.get("vaccine/" + id_vaccine, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data;
};

const addVaccine = async (vaccine, token) => {
  const response = await api.post("vaccine", vaccine, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return response;
};
const updateVaccine = async (token, vaccine, id_vaccine) => {
  let data = await api.put("vaccine/" + id_vaccine, vaccine, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data;
};

const deleteVaccine = async (token, id_vaccine) => {
  let response = await api.delete("vaccine/" + id_vaccine, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return response;
};

export { getAllVaccine, getVaccine, addVaccine, updateVaccine, deleteVaccine };
