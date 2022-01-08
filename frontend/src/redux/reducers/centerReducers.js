import {
  FETCH_CENTER_ERROR,
  FETCH_CENTER_LOADING,
  FETCH_CENTER_SUCCESS,
  ADD_CENTER_SUCCESS,
  ADD_CENTER_ERROR,
  DELETE_CENTER_SUCCESS,
  DELETE_CENTER_ERROR,
  UPDATE_CENTER_SUCCESS,
  UPDATE_CENTER_ERROR,
} from "../types/centerTypes";

const initialState = {
  loading: false,
  centersList: [],
  error: "",
};

function centerReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_CENTER_SUCCESS:
      return {
        ...state,
        centersList: payload,
        loading: false,
      };
    case FETCH_CENTER_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case FETCH_CENTER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ADD_CENTER_SUCCESS:
      return {
        ...state,
        centersList: [...state.centersList, payload],
      };
    case ADD_CENTER_ERROR:
      return {
        ...state,
        error: payload,
      };
    case DELETE_CENTER_SUCCESS:
      const newList = state.centersList.filter((center) => {
        return center._id !== payload;
      });
      return {
        ...state,
        centersList: newList,
      };
    case DELETE_CENTER_ERROR:
      return {
        ...state,
        error: payload,
      };
    case UPDATE_CENTER_SUCCESS:
      const updatedCenter = state.centersList.findIndex((center) => {
        return center._id === payload.id;
      });
      const center = state.centersList[updatedCenter];
      const centersListUpdated = state.centersList;
      centersListUpdated[updatedCenter] = {
        ...center,
        ...payload.centerData,
      };
      console.log(centersListUpdated);
      return {
        ...state,
        centersList: centersListUpdated,
      };
    case UPDATE_CENTER_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
}
export default centerReducer;
