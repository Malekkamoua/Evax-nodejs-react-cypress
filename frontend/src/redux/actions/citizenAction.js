import {
  bookAppointment,
  getProfile,
  getReport,
  updateProfile,
  getAllCitizen,
} from "../../services/citizen.service";
import {
  FETCH_CITIZEN_LOADING,
  FETCH_CITIZEN_SUCCESS,
  FETCH_CITIZEN_ERROR,
  UPDATE_CITIZEN_SUCCESS,
  UPDATE_CITIZEN_ERROR,
  BOOK_APPOINTMENT_SUCCESS,
  BOOK_APPOINTMENT_LOADING,
  BOOK_APPOINTMENT_ERROR,
  GET_REPORT_SUCCESS,
  GET_REPORT_LOADING,
  GET_REPORT_ERROR,
  FETCHALL_CITIZENS_SUCCESS,
  FETCHAll_CITIZENS_ERROR,
} from "../types/citizenTypes";
export const fetchCitizenSuccess = (payload) => ({
  type: FETCH_CITIZEN_SUCCESS,
  payload,
});
export const fetchCitizenLoading = () => ({
  type: FETCH_CITIZEN_LOADING,
});
export const fetchCitizenError = (payload) => ({
  type: FETCH_CITIZEN_ERROR,
  payload,
});
export const fetchAllCitizensSuccess = (payload) => ({
  type: FETCHALL_CITIZENS_SUCCESS,
  payload,
});
export const fetchAllCitizensError = (payload) => ({
  type: FETCHAll_CITIZENS_ERROR,
  payload,
});

export const updateCitizenSuccess = (id, citizen) => ({
  type: UPDATE_CITIZEN_SUCCESS,
  payload: {
    id,
    citizen,
  },
});
export const updateCitizenError = (payload) => ({
  type: UPDATE_CITIZEN_ERROR,
  payload,
});

export const bookAppointmentSuccess = (payload) => ({
  type: BOOK_APPOINTMENT_SUCCESS,
  payload,
});
export const bookAppointmentLoading = () => ({
  type: BOOK_APPOINTMENT_LOADING,
});
export const bookAppointmentError = (payload) => ({
  type: BOOK_APPOINTMENT_ERROR,
  payload,
});

export const getReportSuccess = (payload) => ({
  type: GET_REPORT_SUCCESS,
  payload,
});
export const getReportLoading = () => ({
  type: GET_REPORT_LOADING,
});
export const getReportError = (payload) => ({
  type: GET_REPORT_ERROR,
  payload,
});

export const fetchCitizenAction = (id) => {
  return async (dispatch) => {
    dispatch(fetchCitizenLoading());
    try {
      const res = await getProfile("", id);
      dispatch(fetchCitizenSuccess(res.data));
    } catch (err) {
      dispatch(fetchCitizenError(err));
    }
  };
};
export const fetchAllCitizensAction = () => {
  return async (dispatch) => {
    dispatch(fetchCitizenLoading());
    try {
      const res = await getAllCitizen("");
      dispatch(fetchAllCitizensSuccess(res.data));
    } catch (err) {
      dispatch(fetchAllCitizensError(err));
    }
  };
};

export const bookAppointmentAction = (user_id, center_id, date_suggestion) => {
  return async (dispatch) => {
    dispatch(bookAppointmentLoading());
    try {
      const res = await bookAppointment(
        "",
        user_id,
        center_id,
        date_suggestion
      );
      dispatch(bookAppointmentSuccess(res.data));
    } catch (err) {
      console.log(err.response.data.message);
      dispatch(bookAppointmentError(err.response.data.message));
    }
  };
};

export const getReportAction = (id) => {
  return async (dispatch) => {
    dispatch(getReportLoading());
    try {
      const res = await getReport("", id);
      dispatch(getReportSuccess(res.data));
    } catch (err) {
      dispatch(getReportError(err));
    }
  };
};
export const updateCitizenAction = (id, citizen) => {
  return async (dispatch) => {
    dispatch(fetchCitizenLoading());
    try {
      const res = await updateProfile("", citizen, id);
      dispatch(updateCitizenSuccess(id, citizen));
      dispatch(fetchCitizenSuccess(res.data));
    } catch (err) {
      dispatch(updateCitizenError(err));
      dispatch(fetchCitizenError(err));
    }
  };
};
