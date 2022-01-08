import { getStats } from "../../services/stats.service";
import {
  GET_STATS_LOADING,
  GET_STATS_SUCCESS,
  GET_STATS_ERROR,
} from "../types/statType";

export const getStatsSuccess = (payload) => ({
  type: GET_STATS_SUCCESS,
  payload,
});
export const getStatsError = (payload) => ({
  type: GET_STATS_ERROR,
  payload,
});
export const getStatsLoading = () => ({
  type: GET_STATS_LOADING,
});

export const getStatsAction = () => {
  return async (dispatch) => {
    dispatch(getStatsLoading());
    try {
      const res = await getStats();
      dispatch(getStatsSuccess(res.data));
    } catch (err) {
      dispatch(getStatsError(err));
    }
  };
};
