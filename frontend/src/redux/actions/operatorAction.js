import {
  FETCH_OPERATOR_ERROR,
  FETCH_OPERATOR_LOADING,
  FETCH_OPERATOR_SUCCESS,
  ADD_OPERATOR_ERROR,
  ADD_OPERATOR_SUCCESS,
  DELETE_OPERATOR_ERROR,
  DELETE_OPERATOR_SUCCESS,
  UPDATE_OPERATOR_ERROR,
  UPDATE_OPERATOR_SUCCESS,
} from "../types/operatorTypes";
import {
  getAllOperators,
  addAnOperator,
  deleteAnOperator,
  updateAnOperator,
} from "../../services/operator.service";
export const fetchOperatorError = (payload) => ({
  type: FETCH_OPERATOR_ERROR,
  payload,
});
export const fetchOperatorLoading = () => ({
  type: FETCH_OPERATOR_LOADING,
});
export const fetchOperatorSuccess = (payload) => ({
  type: FETCH_OPERATOR_SUCCESS,
  payload,
});
export const addOperatorError = (payload) => ({
  type: ADD_OPERATOR_ERROR,
  payload,
});
export const addOperatorSuccess = (payload) => ({
  type: ADD_OPERATOR_SUCCESS,
  payload,
});
export const deleteOperatorError = (payload) => ({
  type: DELETE_OPERATOR_ERROR,
  payload,
});
export const deleteOperatorSuccess = (payload) => ({
  type: DELETE_OPERATOR_SUCCESS,
  payload,
});
export const updateOperatorError = (payload) => ({
  type: UPDATE_OPERATOR_ERROR,
  payload,
});
export const updateOperatorSuccess = (id, operatorData) => ({
  type: UPDATE_OPERATOR_SUCCESS,
  payload: {
    id,
    operatorData,
  },
});
export const fetchAllOperators = () => {
  return async (dispatch) => {
    dispatch(fetchOperatorLoading());
    try {
      const res = await getAllOperators("");
      dispatch(fetchOperatorSuccess(res.data));
    } catch (err) {
      dispatch(fetchOperatorError(err));
    }
  };
};
export const addOperator = (operator) => {
  return async (dispatch) => {
    try {
      const res = await addAnOperator(operator, "");
      dispatch(addOperatorSuccess(res.data.operator));
    } catch (err) {
      dispatch(addOperatorError(err));
    }
  };
};
export const deleteOperator = (id) => {
  return async (dispatch) => {
    try {
      await deleteAnOperator("", id);
      dispatch(deleteOperatorSuccess(id));
    } catch (err) {
      dispatch(deleteOperatorError(err));
    }
  };
};
export const updateOperator = (id, operatorData) => {
  return async (dispatch) => {
    dispatch(fetchOperatorLoading());
    try {
      await updateAnOperator("", operatorData, id);
      const res = await getAllOperators("");

      dispatch(updateOperatorSuccess(id, operatorData));
      dispatch(fetchOperatorSuccess(res.data));
    } catch (err) {
      dispatch(updateOperatorError(err));
      dispatch(fetchOperatorError(err));
    }
  };
};
