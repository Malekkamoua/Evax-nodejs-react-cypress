import {
  FETCH_PHARMACY_ERROR,
  FETCH_PHARMACY_LOADING,
  FETCH_PHARMACY_SUCCESS,
  ADD_PHARMACY_SUCCESS,
  ADD_PHARMACY_ERROR,
  DELETE_PHARMACY_SUCCESS,
  DELETE_PHARMACY_ERROR,
  UPDATE_PHARMACY_SUCCESS,
  UPDATE_PHARMACY_ERROR,
} from "../types/pharmacyTypes";

const initialState = {
  loading: false,
  listPharmacy: [],
  error: "",
};

function pharmacyReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_PHARMACY_SUCCESS:
      return { ...state, listPharmacy: payload, loading: false };
    case FETCH_PHARMACY_ERROR:
      return { ...state, error: payload, loading: false };
    case FETCH_PHARMACY_LOADING:
      return { ...state, loading: true };
    case ADD_PHARMACY_SUCCESS:
      return { ...state, listPharmacy: [...state.listPharmacy, payload] };
    case ADD_PHARMACY_ERROR:
      return { ...state, error: payload };
    case DELETE_PHARMACY_SUCCESS:
      const newList = state.listPharmacy.filter((pharmacy) => {
        return pharmacy._id !== payload;
      });
      return { ...state, listPharmacy: newList };
    case DELETE_PHARMACY_ERROR:
      return { ...state, error: payload };
    case UPDATE_PHARMACY_SUCCESS:
      const indexUpdatedpharmacy = state.listPharmacy.findIndex((pharmacy) => {
        return pharmacy._id === payload.id;
      });
      const pharmacy = state.listPharmacy[indexUpdatedpharmacy];
      const listPharmacyupdated = state.listPharmacy;
      listPharmacyupdated[indexUpdatedpharmacy] = {
        ...pharmacy,
        ...payload.pharmacyData,
      };
      console.log(listPharmacyupdated);
      return { ...state, listPharmacy: listPharmacyupdated };
    case UPDATE_PHARMACY_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
}
export default pharmacyReducer;
