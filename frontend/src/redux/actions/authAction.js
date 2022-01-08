import { login, register, generatePassword } from "../../services/auth.service";
import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  REGISTER_ERROR,
  LOGIN_LOADING,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  GENERATE_PASSWORD_LOADING,
  GENERATE_PASSWORD_SUCCESS,
  GENERATE_PASSWORD_ERROR,
} from "../types/authTypes";

export const loginLoading = () => ({
  type: LOGIN_LOADING,
});
export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});
export const loginError = (payload) => ({
  type: LOGIN_ERROR,
  payload,
});

export const registerLoading = () => ({
  type: REGISTER_LOADING,
});
export const registerSuccess = (payload) => ({
  type: REGISTER_SUCCESS,
  payload,
});
export const registerError = (payload) => ({
  type: REGISTER_ERROR,
  payload,
});

export const generatePasswordLoading = () => ({
  type: GENERATE_PASSWORD_LOADING,
});
export const generatePasswordSuccess = (payload) => ({
  type: GENERATE_PASSWORD_SUCCESS,
  payload,
});
export const generatePasswordError = (payload) => ({
  type: GENERATE_PASSWORD_ERROR,
  payload,
});

export const registerAction = (data) => {
  return async (dispatch) => {
    try {
      dispatch(registerLoading());
      const res = await register(data);
      dispatch(registerSuccess(res.data));
    } catch (err) {
      dispatch(registerError(err));
    }
  };
};

export const generatePasswordAction = (data) => {
  return async (dispatch) => {
    dispatch(generatePasswordLoading());
    try {
      const res = await generatePassword(data);
      dispatch(generatePasswordSuccess(res.data));
    } catch (err) {
      console.log("hereeee error ", err);
      dispatch(generatePasswordError(err));
    }
  };
};

export const loginAction = (data) => {
  return async (dispatch) => {
    dispatch(loginLoading());
    try {
      const res = await login(data);
      dispatch(loginSuccess(res.data));
      localStorage.setItem("user", JSON.stringify(res.data));
    } catch (err) {
      dispatch(loginError(err));
    }
  };
};
