import {
  FETCH_VOLUNTEER_ERROR,
  FETCH_VOLUNTEER_LOADING,
  FETCH_VOLUNTEER_SUCCESS,
  ADD_VOLUNTEER_SUCCESS,
  ADD_VOLUNTEER_ERROR,
  DELETE_VOLUNTEER_SUCCESS,
  DELETE_VOLUNTEER_ERROR,
  UPDATE_VOLUNTEER_SUCCESS,
  UPDATE_VOLUNTEER_ERROR,
} from "../types/volunteerTypes";

const initialState = {
  loading: false,
  listVolunteer: [],
  error: "",
};

function volunteerReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_VOLUNTEER_SUCCESS:
      return { ...state, listVolunteer: payload, loading: false };
    case FETCH_VOLUNTEER_ERROR:
      return { ...state, error: payload, loading: false };
    case FETCH_VOLUNTEER_LOADING:
      return { ...state, loading: true };
    case ADD_VOLUNTEER_SUCCESS:
      return { ...state, listVolunteer: [...state.listVolunteer, payload] };
    case ADD_VOLUNTEER_ERROR:
      return { ...state, error: payload };
    case DELETE_VOLUNTEER_SUCCESS:
      const newList = state.listVolunteer.filter((volunteer) => {
        return volunteer._id !== payload;
      });
      return { ...state, listVolunteer: newList };
    case DELETE_VOLUNTEER_ERROR:
      return { ...state, error: payload };
    case UPDATE_VOLUNTEER_SUCCESS:
      const indexUpdatedVolunteer = state.listVolunteer.findIndex(
        (volunteer) => {
          return volunteer._id === payload.id;
        }
      );
      const volunteer = state.listVolunteer[indexUpdatedVolunteer];
      const listVolunteerupdated = state.listVolunteer;
      listVolunteerupdated[indexUpdatedVolunteer] = {
        ...volunteer,
        ...payload.VOLUNTEERData,
      };
      console.log(listVolunteerupdated);
      return { ...state, listVolunteer: listVolunteerupdated };
    case UPDATE_VOLUNTEER_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
}
export default volunteerReducer;
