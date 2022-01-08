import {
  getAllCenter,
  addCenter,
  deleteCenter,
  updateCenter,
} from "../../services/centerService";

import {
  ADD_CENTER_ERROR,
  ADD_CENTER_SUCCESS,
  DELETE_CENTER_ERROR,
  DELETE_CENTER_SUCCESS,
  FETCH_CENTER_ERROR,
  FETCH_CENTER_LOADING,
  FETCH_CENTER_SUCCESS,
  UPDATE_CENTER_ERROR,
  UPDATE_CENTER_SUCCESS,
} from "../types/centerTypes";

export const fetchCenterSuccess = (payload) => ({
  type: FETCH_CENTER_SUCCESS,
  payload,
});
export const fetchCenterLoading = () => ({
  type: FETCH_CENTER_LOADING,
});
export const fetchCenterError = (payload) => ({
  type: FETCH_CENTER_ERROR,
  payload,
});
export const addCenterSuccess = (payload) => ({
  type: ADD_CENTER_SUCCESS,
  payload,
});
export const addCenterError = (payload) => ({
  type: ADD_CENTER_ERROR,
  payload,
});
export const deleteCenterSuccess = (payload) => ({
  type: DELETE_CENTER_SUCCESS,
  payload,
});
export const deleteCenterError = (payload) => ({
  type: DELETE_CENTER_ERROR,
  payload,
});
export const updateCenterSuccess = (id, center) => ({
  type: UPDATE_CENTER_SUCCESS,
  payload: {
    id,
    center,
  },
});
export const updateCenterError = (payload) => ({
  type: UPDATE_CENTER_ERROR,
  payload,
});

export const fetchAllCentersAction = () => {
  return async (dispatch) => {
    dispatch(fetchCenterLoading());
    try {
      const res = await getAllCenter("");
      dispatch(fetchCenterSuccess(res.data));
    } catch (err) {
      dispatch(fetchCenterError(err));
    }
  };
};

export const addCenterAction = (center) => {
  return async (dispatch) => {
    try {
      const res = await addCenter(center, "");
      dispatch(addCenterSuccess(res.data));
    } catch (err) {
      dispatch(addCenterError(err));
    }
  };
};

export const deleteCenterAction = (id) => {
  return async (dispatch) => {
    try {
      await deleteCenter("", id);
      dispatch(deleteCenterSuccess(id));
    } catch (err) {
      dispatch(deleteCenterError(err));
    }
  };
};

export const updateCenterAction = (id, center) => {
  return async (dispatch) => {
    dispatch(fetchCenterLoading());
    try {
      await updateCenter("", center, id);
      const res = await getAllCenter("");
      dispatch(updateCenterSuccess(id, center));
      dispatch(fetchCenterSuccess(res.data));
    } catch (err) {
      dispatch(updateCenterError(err));
      dispatch(fetchCenterError(err));
    }
  };
};
