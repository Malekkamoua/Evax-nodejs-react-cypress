import api from "../api";

const getAllCenter = async (token) => {
  let data = await api.get("centers/all", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data;
};

const getCenter = async (token, id_center) => {
  let data = await api.get("centers/" + id_center, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data;
};

const addCenter = async (center, token) => {
  const response = await api.post("centers", center, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return response;
};
const updateCenter = async (token, center, id_center) => {
  let data = await api.put("centers/" + id_center, center, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data;
};

const deleteCenter = async (token, id_center) => {
  let response = await api.delete("centers/" + id_center, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return response;
};

export { addCenter, getAllCenter, deleteCenter, getCenter, updateCenter };
