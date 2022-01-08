import {
  GET_STATS_LOADING,
  GET_STATS_SUCCESS,
  GET_STATS_ERROR,
} from "../types/statType";

const initialState = {};

function statsReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_STATS_SUCCESS:
      return {
        ...state,
        stats: payload,
        loading: false,
      };
    case GET_STATS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case GET_STATS_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}
export default statsReducer;
