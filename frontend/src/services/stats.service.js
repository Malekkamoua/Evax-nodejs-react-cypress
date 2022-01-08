import api from "../api";

const getStats = async (token) => {
  let data = await api.get("stats/", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data;
};

export { getStats };
