import {
  FETCH_OPERATOR_ERROR,
  FETCH_OPERATOR_LOADING,
  FETCH_OPERATOR_SUCCESS,
  ADD_OPERATOR_SUCCESS,
  ADD_OPERATOR_ERROR,
  DELETE_OPERATOR_SUCCESS,
  DELETE_OPERATOR_ERROR,
  UPDATE_OPERATOR_SUCCESS,
  UPDATE_OPERATOR_ERROR,
} from "../types/operatorTypes";

const initialState = {
  loading: false,
  listOperator: [],
  error: "",
};

function operatorReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_OPERATOR_ERROR:
      return { ...state, error: payload, loading: false };
    case FETCH_OPERATOR_LOADING:
      return { ...state, loading: true };
    case FETCH_OPERATOR_SUCCESS:
      return { ...state, listOperator: payload, loading: false };
    case ADD_OPERATOR_ERROR:
      return { ...state, error: payload };
    case ADD_OPERATOR_SUCCESS:
      return { ...state, listOperator: [...state.listOperator, payload] };
    case DELETE_OPERATOR_SUCCESS:
      const newList = state.listOperator.filter((operator) => {
        return operator._id !== payload;
      });
      return { ...state, listOperator: newList };
    case DELETE_OPERATOR_ERROR:
      return { ...state, error: payload };
    case UPDATE_OPERATOR_SUCCESS:
      const indexUpdatedoperator = state.listOperator.findIndex((operator) => {
        return operator._id === payload.id;
      });
      const operator = state.listOperator[indexUpdatedoperator];
      const listOperatorupdated = state.listOperator;
      listOperatorupdated[indexUpdatedoperator] = {
        ...operator,
        ...payload.operatorData,
      };
      console.log(listOperatorupdated);
      return { ...state, listOperator: listOperatorupdated };
    case UPDATE_OPERATOR_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
}
export default operatorReducer;
