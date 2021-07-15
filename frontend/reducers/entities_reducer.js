import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import pinsReducer from "./pins_reducer";
import boardsReducer from "./boards_reducers"
import pinBoardsReducer from "./pin_board_reducers";

const entitiesReducer = combineReducers ({
  users: usersReducer,
  pins: pinsReducer,
  boards: boardsReducer,
  pinBoards: pinBoardsReducer
});

export default entitiesReducer;