import api from "../api";

const getProfile = async (token, id_citizen) => {
  let data = await api.get("Citizen/" + id_citizen, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data;
};

const updateProfile = async (token, citizen, id_citizen) => {
  let data = await api.put("Citizen/" + id_citizen, citizen, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data;
};
const getAllCitizen = async (token) => {
  let data = await api.get("Citizen/all", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  console.log(data);
  return data;
};

const bookAppointment = async (token, info) => {
  console.log(info);
  let data = await api.post("/appointments/book", info, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data;
};

const getReport = async (token, id_citizen) => {
  let data = await api.get("/Citizen/" + id_citizen + "/report/", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data;
};
export { getProfile, updateProfile, bookAppointment, getReport, getAllCitizen };
