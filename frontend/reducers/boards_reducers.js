import { RECEIVE_BOARDS, RECEIVE_BOARD, REMOVE_BOARD } from "../actions/board_actions";

const boardsReducer = (prevState = {}, action) => {
  Object.freeze(prevState);
  switch (action.type) {
    case RECEIVE_BOARDS:
      return Object.assign({}, action.boards);

    case RECEIVE_BOARD:
      return Object.assign({}, prevState, {[action.board.id]: action.board});

    case REMOVE_BOARD:
      let nextState = Object.assign({}, prevState);
      delete nextState[action.boardId]
      return Object.assign({}) 

    default:
      return prevState;
  }
}

export default boardsReducer;