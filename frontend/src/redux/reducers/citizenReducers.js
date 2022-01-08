import {
  FETCH_CITIZEN_ERROR,
  FETCHAll_CITIZENS_ERROR,
  FETCHALL_CITIZENS_SUCCESS,
  FETCH_CITIZEN_LOADING,
  FETCH_CITIZEN_SUCCESS,
  UPDATE_CITIZEN_SUCCESS,
  UPDATE_CITIZEN_ERROR,
  BOOK_APPOINTMENT_SUCCESS,
  BOOK_APPOINTMENT_ERROR,
  BOOK_APPOINTMENT_LOADING,
  GET_REPORT_SUCCESS,
  GET_REPORT_ERROR,
  GET_REPORT_LOADING,
} from "../types/citizenTypes";

const initialState = {
  loading: false,
  citizensList: [],
  citizen: {},
  error: "",
  message: "",
  message_appointment: "",
  loading_appointment: false,
};

function citizenReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_CITIZEN_SUCCESS:
      return {
        ...state,
        citizen: payload,
        loading: false,
      };
    case FETCHALL_CITIZENS_SUCCESS:
      return {
        ...state,
        citizensList: payload,
        loading: false,
      };
    case FETCH_CITIZEN_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case FETCHAll_CITIZENS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case FETCH_CITIZEN_LOADING:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_CITIZEN_SUCCESS:
      return {
        ...state,
        citizen: payload,
      };

    case UPDATE_CITIZEN_ERROR:
      return {
        ...state,
        error: payload,
      };
    case BOOK_APPOINTMENT_SUCCESS:
      return {
        ...state,
        message_appointment: payload,
        loading: false,
        error: "",
        loading_appointment: false,
      };
    case BOOK_APPOINTMENT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        loading_appointment: false,
      };
    case BOOK_APPOINTMENT_LOADING:
      return {
        ...state,
        loading: true,
        loading_appointment: true,
      };

    case GET_REPORT_SUCCESS:
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case GET_REPORT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case GET_REPORT_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
export default citizenReducer;
