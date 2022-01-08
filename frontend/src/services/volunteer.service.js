import api from "../api";

const getAllVolunteer = async (token) => {
  let data = await api.get("volunteers/all", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data;
};

const getVolunteer = async (token, id_volunteer) => {
  let data = await api.get("volunteers/" + id_volunteer, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data;
};

const addVolunteer = async (volunteer, token) => {
  const response = await api.post("volunteers", volunteer, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return response;
};
const updateVolunteer = async (token, volunteer, id_volunteer) => {
  let data = await api.put("volunteers/" + id_volunteer, volunteer, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data;
};

const deleteVolunteer = async (token, id_volunteer) => {
  let response = await api.delete("volunteers/" + id_volunteer, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return response;
};

export {
  addVolunteer,
  getAllVolunteer,
  deleteVolunteer,
  getVolunteer,
  updateVolunteer,
};
