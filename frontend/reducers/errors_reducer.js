import { combineReducers } from "redux";
import sessionErrors from "./session_errors_reducer";
import pinErrors from "./pin_errors_reducer";
import boardErrors from "./board_errors_reducers"

const errorsReducer = combineReducers({
  session: sessionErrors,
  pin: pinErrors,
  board: boardErrors
});

export default errorsReducer;
