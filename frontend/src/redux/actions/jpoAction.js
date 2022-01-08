import {
  getAllJpo,
  addJpo,
  deleteJpo,
  updateJpo,
  getJpoPopulated,
} from "../../services/jpoService";

import {
  ADD_JPO_ERROR,
  ADD_JPO_SUCCESS,
  DELETE_JPO_ERROR,
  DELETE_JPO_SUCCESS,
  FETCH_JPO_ERROR,
  FETCH_JPO_LOADING,
  FETCH_JPO_SUCCESS,
  UPDATE_JPO_ERROR,
  UPDATE_JPO_SUCCESS,
  VIEW_JPO,
  FETCH_JPOPOPULATED_SUCCESS,
  AFFECT_VOLUNTEER_JPO,
  EXCLUDE_VOLUNTEER,
} from "../types/jpoTypes";

export const fetchJpoSuccess = (payload) => ({
  type: FETCH_JPO_SUCCESS,
  payload,
});
export const fetchJpoPopulatedSuccess = (payload) => ({
  type: FETCH_JPOPOPULATED_SUCCESS,
  payload,
});
export const fetchJpoLoading = () => ({
  type: FETCH_JPO_LOADING,
});
export const fetchJpoError = (payload) => ({
  type: FETCH_JPO_ERROR,
  payload,
});
export const addJpoSuccess = (payload) => ({
  type: ADD_JPO_SUCCESS,
  payload,
});
export const addJpoError = (payload) => ({
  type: ADD_JPO_ERROR,
  payload,
});
export const deleteJpoSuccess = (payload) => ({
  type: DELETE_JPO_SUCCESS,
  payload,
});
export const deleteJpoError = (payload) => ({
  type: DELETE_JPO_ERROR,
  payload,
});
export const updateJpoSuccess = (id, jpo) => ({
  type: UPDATE_JPO_SUCCESS,
  payload: {
    id,
    jpo,
  },
});
export const viewJpo = (payload) => ({
  type: VIEW_JPO,
  payload,
});
export const updateJpoError = (payload) => ({
  type: UPDATE_JPO_ERROR,
  payload,
});
export const updateJpoObjectSuccess = (id, jpoObject) => ({
  type: AFFECT_VOLUNTEER_JPO,
  payload: {
    id,
    jpoObject,
  },
});

export const excludeVolunteer = (id, jpoObject) => ({
  type: EXCLUDE_VOLUNTEER,
  payload: {
    id,
    jpoObject,
  },
});

export const fetchAllJposAction = () => {
  return async (dispatch) => {
    dispatch(fetchJpoLoading());
    try {
      const res = await getAllJpo("");
      dispatch(fetchJpoSuccess(res.data));
    } catch (err) {
      dispatch(fetchJpoError(err));
    }
  };
};

export const addJpoAction = (jpo) => {
  return async (dispatch) => {
    try {
      const res = await addJpo(jpo, "");
      dispatch(addJpoSuccess(res.data));
    } catch (err) {
      dispatch(addJpoError(err));
    }
  };
};

export const deleteJpoAction = (id) => {
  return async (dispatch) => {
    try {
      await deleteJpo("", id);
      dispatch(deleteJpoSuccess(id));
    } catch (err) {
      dispatch(deleteJpoError(err));
    }
  };
};

export const updateJpoAction = (id, jpo) => {
  return async (dispatch) => {
    dispatch(fetchJpoLoading());
    try {
      await updateJpo("", jpo, id);
      const res = await getAllJpo("");
      dispatch(updateJpoSuccess(id, jpo));
      dispatch(fetchJpoSuccess(res.data));
    } catch (err) {
      dispatch(updateJpoError(err));
      dispatch(fetchJpoError(err));
    }
  };
};
export const update_jpo_object = (id, jpoObject) => {
  return async (dispatch) => {
    dispatch(fetchJpoLoading());
    try {
      const volunteersIdsFiltred = jpoObject.volunteers_id.filter(
        (value, index) => {
          const _value = JSON.stringify(value);
          return (
            index ===
            jpoObject.volunteers_id.findIndex((obj) => {
              return JSON.stringify(obj) === _value;
            })
          );
        }
      );
      jpoObject.volunteers_id = volunteersIdsFiltred;
      await updateJpo("", jpoObject, id);

      dispatch(updateJpoObjectSuccess(id, jpoObject));
    } catch (err) {
      console.log(err);
    }
  };
};

export const excludeVolunteerFromJpo = (id, jpoObject) => {
  return async (dispatch) => {
    dispatch(fetchJpoLoading());
    try {
      await updateJpo("", jpoObject, id);

      dispatch(excludeVolunteer(id, jpoObject));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchJpoViewAction = (id) => {
  return async (dispatch) => {
    try {
      // console.log(id);
      const res = await getJpoPopulated("", id);

      dispatch(fetchJpoPopulatedSuccess(res.data));
    } catch (err) {
      dispatch(fetchJpoError(err));
    }
  };
};
