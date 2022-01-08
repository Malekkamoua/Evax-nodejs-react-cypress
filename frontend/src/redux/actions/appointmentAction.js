import {
  getAllDelayedAppointment,
  getAppointmentOperator,
  reportAppointmentService,
  validateAppointmentOperator,
  generateAppointementCenter,
} from "../../services/appointment.service";
import runNotification from "../../utils/runNotification";
import {
  DELAYED_APPOINTMENT_ERROR,
  DELAYED_APPOINTMENT_LOADING,
  DELAYED_APPOINTMENT_SUCCESS,
  FETCH_APPOINTMENT_ERROR,
  FETCH_APPOINTMENT_LOADING,
  FETCH_APPOINTMENT_SUCCESS,
  REPORT_APPOINTMENT_ERROR,
  REPORT_APPOINTMENT_LOADING,
  REPORT_APPOINTMENT_SUCCESS,
  VALIDATE_APPOINTMENT_ERROR,
  VALIDATE_APPOINTMENT_SUCCESS,
  GENERATE_APPOINTMENT_ERROR,
  GENERATE_APPOINTMENT_SUCCESS,
} from "../types/appointmentTypes";

export const fetchAppointmentSuccess = (payload) => ({
  type: FETCH_APPOINTMENT_SUCCESS,
  payload,
});
export const fetchAppointmentError = (payload) => ({
  type: FETCH_APPOINTMENT_ERROR,
  payload,
});
export const fetchAppointmentLoading = () => ({
  type: FETCH_APPOINTMENT_LOADING,
});
export const validateAppointmentSuccess = (payload) => ({
  type: VALIDATE_APPOINTMENT_SUCCESS,
  payload,
});
export const validateAppointmentError = (payload) => ({
  type: VALIDATE_APPOINTMENT_ERROR,
  payload,
});
export const generateAppointmentSuccess = (payload) => ({
  type: GENERATE_APPOINTMENT_SUCCESS,
  payload,
});
export const generateAppointmentError = (payload) => ({
  type: GENERATE_APPOINTMENT_ERROR,
  payload,
});
export const reportAppointmentSuccess = (payload) => ({
  type: REPORT_APPOINTMENT_SUCCESS,
  payload,
});
export const reportAppointmentError = (payload) => ({
  type: REPORT_APPOINTMENT_ERROR,
  payload,
});
export const reportAppointmentLoading = () => ({
  type: REPORT_APPOINTMENT_LOADING,
});
export const delayedAppointmentError = (payload) => ({
  type: DELAYED_APPOINTMENT_ERROR,
  payload,
});
export const delayedAppointmentSuccess = (payload) => ({
  type: DELAYED_APPOINTMENT_SUCCESS,
  payload,
});
export const delayedAppointmentLoading = () => ({
  type: DELAYED_APPOINTMENT_LOADING,
});

export const fetchAppointmentAction = () => {
  return async (dispatch) => {
    dispatch(fetchAppointmentLoading());
    try {
      const res = await getAppointmentOperator("");
      dispatch(fetchAppointmentSuccess(res.data));
    } catch (err) {
      dispatch(fetchAppointmentError(err));
    }
  };
};
export const validateAppointmentAction = (appointment_id, vaccin_id) => {
  return async (dispatch) => {
    try {
      await validateAppointmentOperator("", appointment_id, vaccin_id);
      dispatch(validateAppointmentSuccess(appointment_id));
    } catch (err) {
      dispatch(validateAppointmentError(err));
    }
  };
};
export const generateAppointementAction = (appointment) => {
  return async (dispatch) => {
    try {
      const res = await generateAppointementCenter(appointment, "");
      dispatch(generateAppointmentSuccess(res.data));
      runNotification(
        "success",
        "Rendez-vous",
        "Rendez vous generer avec success"
      );
    } catch (err) {
      dispatch(generateAppointmentError(err));
    }
  };
};
export const reportAppointmentAction = () => {
  return async (dispatch) => {
    dispatch(reportAppointmentLoading());
    try {
      await reportAppointmentService("");
      dispatch(reportAppointmentSuccess());
    } catch (err) {
      dispatch(reportAppointmentError(err));
    }
  };
};
export const getAllDelayedAppointmentAction = () => {
  return async (dispatch) => {
    dispatch(delayedAppointmentLoading());
    try {
      const res = await getAllDelayedAppointment("");
      console.log(res);
      dispatch(delayedAppointmentSuccess(res.data.length));
    } catch (err) {
      dispatch(delayedAppointmentError(err));
    }
  };
};
