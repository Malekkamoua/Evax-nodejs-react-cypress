import {
  getAllPharmacy,
  addPharmacy,
  deletePharmacy,
  updatePharmacy,
} from "../../services/pharmacy.service";
import {
  ADD_PHARMACY_ERROR,
  ADD_PHARMACY_SUCCESS,
  DELETE_PHARMACY_ERROR,
  DELETE_PHARMACY_SUCCESS,
  FETCH_PHARMACY_ERROR,
  FETCH_PHARMACY_LOADING,
  FETCH_PHARMACY_SUCCESS,
  UPDATE_PHARMACY_ERROR,
  UPDATE_PHARMACY_SUCCESS,
} from "../types/pharmacyTypes";

export const fetchPharmacySuccess = (payload) => ({
  type: FETCH_PHARMACY_SUCCESS,
  payload,
});
export const fetchPharmacyLoading = () => ({
  type: FETCH_PHARMACY_LOADING,
});
export const fetchPharmacyError = (payload) => ({
  type: FETCH_PHARMACY_ERROR,
  payload,
});
export const addPharmacySuccess = (payload) => ({
  type: ADD_PHARMACY_SUCCESS,
  payload,
});
export const addPharmacyError = (payload) => ({
  type: ADD_PHARMACY_ERROR,
  payload,
});
export const deletePharmacySuccess = (payload) => ({
  type: DELETE_PHARMACY_SUCCESS,
  payload,
});
export const deletePharmacyError = (payload) => ({
  type: DELETE_PHARMACY_ERROR,
  payload,
});
export const updatePharmacySuccess = (id, pharmacyData) => ({
  type: UPDATE_PHARMACY_SUCCESS,
  payload: {
    id,
    pharmacyData,
  },
});
export const updatePharmacyError = (payload) => ({
  type: UPDATE_PHARMACY_ERROR,
  payload,
});

export const fetchAllPharmaciesAction = () => {
  return async (dispatch) => {
    dispatch(fetchPharmacyLoading());
    try {
      const res = await getAllPharmacy("");
      dispatch(fetchPharmacySuccess(res.data));
    } catch (err) {
      dispatch(fetchPharmacyError(err));
    }
  };
};
export const addPharmacyAction = (pharmacy) => {
  return async (dispatch) => {
    try {
      const res = await addPharmacy(pharmacy, "");
      dispatch(addPharmacySuccess(res.data));
    } catch (err) {
      dispatch(addPharmacyError(err));
    }
  };
};
export const deletePharmacyAction = (id) => {
  return async (dispatch) => {
    try {
      await deletePharmacy("", id);
      dispatch(deletePharmacySuccess(id));
    } catch (err) {
      dispatch(deletePharmacyError(err));
    }
  };
};
export const updatePharmacyAction = (id, pharmacyData) => {
  return async (dispatch) => {
    dispatch(fetchPharmacyLoading());
    try {
      await updatePharmacy("", pharmacyData, id);
      const res = await getAllPharmacy("");

      dispatch(updatePharmacySuccess(id, pharmacyData));
      dispatch(fetchPharmacySuccess(res.data));
      // dispatch success action
    } catch (err) {
      dispatch(updatePharmacyError(err));
      dispatch(fetchPharmacyError(err));
    }
  };
};
