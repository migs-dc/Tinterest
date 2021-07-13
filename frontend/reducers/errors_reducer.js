import { combineReducers } from "redux";
import sessionErrors from "./session_errors_reducer";
import pinErrors from "./pin_errors_reducer";

const errorsReducer = combineReducers({
  session: sessionErrors,
  pin: pinErrors
});

export default errorsReducer;
