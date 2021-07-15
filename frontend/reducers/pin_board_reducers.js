import { RECEIVE_PIN_BOARD, REMOVE_PIN_BOARD } from "../actions/pin_board_actions";

const pinBoardsReducer = (prevState = {}, action) => {
  Object.freeze(prevState);
  switch (action.type) {
    case RECEIVE_PIN_BOARD:
      return Object.assign({}, prevState, {[action.pinBoard.id]: action.pinBoard});

    case REMOVE_PIN_BOARD:
      let nextState = Object.assign({}, prevState);
      delete nextState[action.pinBoardId]
      return Object.assign({})
    
      default:
        return prevState;
  }
}

export default pinBoardsReducer;