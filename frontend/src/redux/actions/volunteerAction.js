import {
  getAllVolunteer,
  addVolunteer,
  deleteVolunteer,
  updateVolunteer,
} from "../../services/volunteer.service";
import {
  FETCH_VOLUNTEER_ERROR,
  FETCH_VOLUNTEER_LOADING,
  FETCH_VOLUNTEER_SUCCESS,
  ADD_VOLUNTEER_ERROR,
  ADD_VOLUNTEER_SUCCESS,
  DELETE_VOLUNTEER_ERROR,
  DELETE_VOLUNTEER_SUCCESS,
  UPDATE_VOLUNTEER_ERROR,
  UPDATE_VOLUNTEER_SUCCESS,
} from "../types/volunteerTypes";

export const addVolunteerSuccess = (payload) => ({
  type: ADD_VOLUNTEER_SUCCESS,
  payload,
});
export const addVolunteerError = (payload) => ({
  type: ADD_VOLUNTEER_ERROR,
  payload,
});
export const fetchVolunteerSuccess = (payload) => ({
  type: FETCH_VOLUNTEER_SUCCESS,
  payload,
});
export const fetchVolunteerLoading = () => ({
  type: FETCH_VOLUNTEER_LOADING,
});
export const fetchVolunteerError = (payload) => ({
  type: FETCH_VOLUNTEER_ERROR,
  payload,
});
export const deleteVolunteerSuccess = (payload) => ({
  type: DELETE_VOLUNTEER_SUCCESS,
  payload,
});
export const deleteVolunteerError = (payload) => ({
  type: DELETE_VOLUNTEER_ERROR,
  payload,
});
export const updateVolunteerSuccess = (id, VolunteerData) => ({
  type: UPDATE_VOLUNTEER_SUCCESS,
  payload: {
    id,
    VolunteerData,
  },
});
export const updateVolunteerError = (payload) => ({
  type: UPDATE_VOLUNTEER_ERROR,
  payload,
});

export const fetchAllVolunteersAction = () => {
  return async (dispatch) => {
    dispatch(fetchVolunteerLoading());
    try {
      const res = await getAllVolunteer("");
      dispatch(fetchVolunteerSuccess(res.data));
    } catch (err) {
      dispatch(fetchVolunteerError(err));
    }
  };
};
export const addVolunteerAction = (Volunteer) => {
  return async (dispatch) => {
    try {
      const res = await addVolunteer(Volunteer, "");
      dispatch(addVolunteerSuccess(res.data));
    } catch (err) {
      dispatch(addVolunteerError(err));
    }
  };
};
export const deleteVolunteerAction = (id) => {
  return async (dispatch) => {
    try {
      await deleteVolunteer("", id);
      dispatch(deleteVolunteerSuccess(id));
    } catch (err) {
      dispatch(deleteVolunteerError(err));
    }
  };
};
export const updateVolunteerAction = (id, VolunteerData) => {
  return async (dispatch) => {
    dispatch(fetchVolunteerLoading());
    try {
      await updateVolunteer("", VolunteerData, id);
      const res = await getAllVolunteer("");
      dispatch(updateVolunteerSuccess(id, VolunteerData));
      dispatch(fetchVolunteerSuccess(res.data));
    } catch (err) {
      dispatch(updateVolunteerError(err));
      dispatch(fetchVolunteerError(err));
    }
  };
};
