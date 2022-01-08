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

const initialState = {
  loading: false,
  listVaccine: [],
  error: "",
};

function vaccineReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_VACCINE_SUCCESS:
      return { ...state, listVaccine: payload, loading: false };
    case FETCH_VACCINE_ERROR:
      return { ...state, error: payload, loading: false };
    case FETCH_VACCINE_LOADING:
      return { ...state, loading: true };
    case ADD_VACCINE_SUCCESS:
      return { ...state, listVaccine: [...state.listVaccine, payload] };
    case ADD_VACCINE_ERROR:
      return { ...state, error: payload };
    case DELETE_VACCINE_SUCCESS:
      const newList = state.listVaccine.filter((vaccine) => {
        return vaccine._id !== payload;
      });
      return { ...state, listVaccine: newList };
    case DELETE_VACCINE_ERROR:
      return { ...state, error: payload };
    case UPDATE_VACCINE_SUCCESS:
      const indexUpdatedvaccine = state.listVaccine.findIndex((vaccine) => {
        return vaccine._id === payload.id;
      });
      const vaccine = state.listVaccine[indexUpdatedvaccine];
      const listVaccineupdated = state.listVaccine;
      listVaccineupdated[indexUpdatedvaccine] = {
        ...vaccine,
        ...payload.vaccineData,
      };
      console.log(listVaccineupdated);
      return { ...state, listVaccine: listVaccineupdated };
    case UPDATE_VACCINE_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
}
export default vaccineReducer;
