import { combineReducers } from "redux";

import operator from "./operatorReducer";
import pharmacy from "./pharmacyReducer";
import center from "./centerReducers";
import citizen from "./citizenReducers";
import volunteer from "./volunteerReducer";
import vaccine from "./vaccineReducer";
import auth from "./authReducers";
import appointment from "./appointmentReducers";
import jpo from "./jpoReducers";

export default combineReducers({
  auth,
  operator,
  pharmacy,
  center,
  citizen,
  volunteer,
  vaccine,
  appointment,
  jpo,
});
