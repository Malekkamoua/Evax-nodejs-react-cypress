import api from "../api";

const getAllOperators = async (token) => {
  let data = await api.get("operator/all", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data;
};

const getAnOperator = async (token, id_operator) => {
  let data = await api.get("operator/" + id_operator, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data;
};

const addAnOperator = async (operator, token) => {
  const response = await api.post("operator", operator, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return response;
};
const updateAnOperator = async (token, operator, id_operator) => {
  let data = await api.put("operator/" + id_operator, operator, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data;
};

const deleteAnOperator = async (token, id_operator) => {
  let response = await api.delete("operator/" + id_operator, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return response;
};

export {
  addAnOperator,
  getAllOperators,
  deleteAnOperator,
  getAnOperator,
  updateAnOperator,
};
