import {
  DELAYED_APPOINTMENT_ERROR,
  DELAYED_APPOINTMENT_LOADING,
  DELAYED_APPOINTMENT_SUCCESS,
  FETCH_APPOINTMENT_ERROR,
  FETCH_APPOINTMENT_LOADING,
  FETCH_APPOINTMENT_SUCCESS,
  GENERATE_APPOINTMENT_SUCCESS,
  REPORT_APPOINTMENT_ERROR,
  REPORT_APPOINTMENT_LOADING,
  REPORT_APPOINTMENT_SUCCESS,
  VALIDATE_APPOINTMENT_ERROR,
  VALIDATE_APPOINTMENT_SUCCESS,
} from "../types/appointmentTypes";

const initialState = {
  loading: false,
  appointmentList: [],
  error: "",
  lengthDelayedAppointment: "",
};

function centerReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_APPOINTMENT_LOADING:
      return { ...state, loading: true };
    case FETCH_APPOINTMENT_SUCCESS:
      return { ...state, appointmentList: payload, loading: false };
    case FETCH_APPOINTMENT_ERROR:
      return { ...state, error: payload, loading: false };
    case VALIDATE_APPOINTMENT_SUCCESS:
      console.log(payload);
      const filterAppointmentList = state.appointmentList.filter((elem) => {
        return elem._id.toString() !== payload.toString();
      });
      return {
        ...state,
        appointmentList: filterAppointmentList,
        loading: false,
      };
    case VALIDATE_APPOINTMENT_ERROR:
      return {
        ...state,
        error: payload,
      };
    case GENERATE_APPOINTMENT_SUCCESS:
      return {
        ...state,
        appointmentList: [...state.appointmentList, payload],
      };
    case REPORT_APPOINTMENT_SUCCESS:
      return {
        ...state,
        lengthDelayedAppointment: 0,
        loading: false,
      };
    case REPORT_APPOINTMENT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case REPORT_APPOINTMENT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case DELAYED_APPOINTMENT_SUCCESS:
      return {
        ...state,
        lengthDelayedAppointment: payload,
        loading: false,
      };
    case DELAYED_APPOINTMENT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case DELAYED_APPOINTMENT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
export default centerReducer;
