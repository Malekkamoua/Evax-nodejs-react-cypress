import api from "../api";

const getAppointmentOperator = async (token) => {
  let data = await api.get("appointments/all", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data;
};

const validateAppointmentOperator = async (
  token,
  appointment_id,
  vaccin_id
) => {
  let data = await api.post(
    "appointments/validate",
    { appointment_id, vaccin_id },
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  return data;
};
const generateAppointementCenter = async (Appointement, token) => {
  const response = await api.post("appointments/center", Appointement, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return response;
};
const reportAppointmentService = async (token) => {
  let data = await api.get("appointments/report", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data;
};

const getAllDelayedAppointment = async (token) => {
  let data = await api.get("appointments/delayed", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data;
};
export {
  getAppointmentOperator,
  validateAppointmentOperator,
  reportAppointmentService,
  getAllDelayedAppointment,
  generateAppointementCenter,
};
