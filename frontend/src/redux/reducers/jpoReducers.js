import {
  FETCH_JPO_ERROR,
  FETCH_JPO_LOADING,
  FETCH_JPO_SUCCESS,
  ADD_JPO_SUCCESS,
  ADD_JPO_ERROR,
  DELETE_JPO_SUCCESS,
  DELETE_JPO_ERROR,
  UPDATE_JPO_SUCCESS,
  UPDATE_JPO_ERROR,
  VIEW_JPO,
  FETCH_JPOPOPULATED_SUCCESS,
  AFFECT_VOLUNTEER_JPO,
  EXCLUDE_VOLUNTEER,
} from "../types/jpoTypes";

const initialState = {
  loading: false,
  listJpo: [],
  error: "",
  selectedJpo: {},
  jpoObject: {},
};

function jpoReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_JPO_SUCCESS:
      return {
        ...state,
        listJpo: payload,
        loading: false,
      };
    case FETCH_JPO_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case FETCH_JPO_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ADD_JPO_SUCCESS:
      return {
        ...state,
        listJpo: [...state.listJpo, payload],
      };
    case ADD_JPO_ERROR:
      return {
        ...state,
        error: payload,
      };
    case DELETE_JPO_SUCCESS:
      const newList = state.listJpo.filter((jpo) => {
        return jpo._id !== payload;
      });
      return {
        ...state,
        listJpo: newList,
      };
    case DELETE_JPO_ERROR:
      return {
        ...state,
        error: payload,
      };
    case UPDATE_JPO_SUCCESS:
      const updated_jpo = state.listJpo.findIndex((jpo) => {
        return jpo._id === payload.id;
      });
      const jpo = state.listJpo[updated_jpo];
      const listJpoUpdated = state.listJpo;
      listJpoUpdated[updated_jpo] = {
        ...jpo,
        ...payload.jpoData,
      };
      console.log(listJpoUpdated);
      return {
        ...state,
        listJpo: listJpoUpdated,
      };
    case UPDATE_JPO_ERROR:
      return {
        ...state,
        error: payload,
      };
    case VIEW_JPO:
      return {
        ...state,
        selectedJpo: payload,
      };
    case FETCH_JPOPOPULATED_SUCCESS:
      return {
        ...state,
        jpoObject: payload,
        loading: false,
      };
    case AFFECT_VOLUNTEER_JPO:
      return {
        ...state,
        jpoObject: payload.jpoObject,
        loading: false,
      };
    case EXCLUDE_VOLUNTEER:
      return {
        ...state,
        jpoObject: payload.jpoObject,
        loading: false,
      };

    default:
      return state;
  }
}
export default jpoReducer;
