import {
  getAllVaccine,
  addVaccine,
  deleteVaccine,
  updateVaccine,
} from "../../services/vaccine.service";
import {
  FETCH_VACCINE_ERROR,
  FETCH_VACCINE_LOADING,
  FETCH_VACCINE_SUCCESS,
  ADD_VACCINE_SUCCESS,
  ADD_VACCINE_ERROR,
  DELETE_VACCINE_SUCCESS,
  DELETE_VACCINE_ERROR,
  UPDATE_VACCINE_SUCCESS,
  UPDATE_VACCINE_ERROR,
} from "../types/vaccineTypes";

export const fetchVaccineSuccess = (payload) => ({
  type: FETCH_VACCINE_SUCCESS,
  payload,
});
export const fetchVaccineLoading = () => ({
  type: FETCH_VACCINE_LOADING,
});
export const fetchVaccineError = (payload) => ({
  type: FETCH_VACCINE_ERROR,
  payload,
});
export const addVaccineSuccess = (payload) => ({
  type: ADD_VACCINE_SUCCESS,
  payload,
});
export const addVaccineError = (payload) => ({
  type: ADD_VACCINE_ERROR,
  payload,
});
export const deleteVaccineSuccess = (payload) => ({
  type: DELETE_VACCINE_SUCCESS,
  payload,
});
export const deleteVaccineError = (payload) => ({
  type: DELETE_VACCINE_ERROR,
  payload,
});
export const updateVaccineSuccess = (id, vaccineData) => ({
  type: UPDATE_VACCINE_SUCCESS,
  payload: {
    id,
    vaccineData,
  },
});
export const updateVaccineError = (payload) => ({
  type: UPDATE_VACCINE_ERROR,
  payload,
});

export const fetchAllVaccinesAction = () => {
  return async (dispatch) => {
    dispatch(fetchVaccineLoading());
    try {
      const res = await getAllVaccine("");
      dispatch(fetchVaccineSuccess(res.data));
    } catch (err) {
      dispatch(fetchVaccineError(err));
    }
  };
};
export const addVaccineAction = (vaccine) => {
  return async (dispatch) => {
    try {
      const res = await addVaccine(vaccine, "");
      dispatch(addVaccineSuccess(res.data));
    } catch (err) {
      dispatch(addVaccineError(err));
    }
  };
};
export const deleteVaccineAction = (id) => {
  return async (dispatch) => {
    try {
      await deleteVaccine("", id);
      dispatch(deleteVaccineSuccess(id));
    } catch (err) {
      dispatch(deleteVaccineError(err));
    }
  };
};
export const updateVaccineAction = (id, vaccineData) => {
  return async (dispatch) => {
    dispatch(fetchVaccineLoading());
    try {
      await updateVaccine("", vaccineData, id);
      const res = await getAllVaccine("");

      dispatch(updateVaccineSuccess(id, vaccineData));
      dispatch(fetchVaccineSuccess(res.data));
      // dispatch success action
    } catch (err) {
      dispatch(updateVaccineError(err));
      dispatch(fetchVaccineError(err));
    }
  };
};
