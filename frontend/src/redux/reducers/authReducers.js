import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  REGISTER_ERROR,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  GENERATE_PASSWORD_LOADING,
  GENERATE_PASSWORD_SUCCESS,
  GENERATE_PASSWORD_ERROR,
} from "../types/authTypes";

const initialState = {};

function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: payload,
        loading: false,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case REGISTER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case GENERATE_PASSWORD_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GENERATE_PASSWORD_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case GENERATE_PASSWORD_SUCCESS:
      return {
        ...state,
        message_pass: payload,
        loading: false,
      };

    default:
      return state;
  }
}
export default authReducer;
