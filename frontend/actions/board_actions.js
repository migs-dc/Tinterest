import * as APIUtil from '../util/board_api_util';

export const RECEIVE_BOARDS = 'RECEIVE_BOARDS';
export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const REMOVE_BOARD = 'REMOVE_BOARD';
export const RECEIVE_BOARD_ERRORS = 'RECEIVE_BOARD_ERRORS';

export const receiveBoards = boards => ({
  type: RECEIVE_BOARDS,
  boards,
});

export const receiveBoard = board => ({
  type: RECEIVE_BOARD,
  board
})

export const removeBoard = boardId => ({
  type: REMOVE_BOARD,
  boardId
})

export const receiveErrors = errors => ({
  type: RECEIVE_BOARD_ERRORS,
  errors
})

export const fetchBoards = () => dispatch => APIUtil.fetchBoards()
  .then(boards => dispatch(receiveBoards(boards)))

export const fetchBoard = id => dispatch => APIUtil.fetchBoard(id)
  .then(board => dispatch(receiveBoard(board)))

export const createBoard = board => dispatch => APIUtil.createBoard(board)
  .then(board => dispatch(receiveBoard(board)),
    error => dispatch(receiveErrors(error.responseJSON))
  )

export const updateBoard = board => dispatch => APIUtil.updateBoard(board)
  .then(updatedBoard => (dispatch(receiveBoard(updatedBoard)))
    // , error => (dispatch(receiveErrors(error.responseJSON)))
  )

export const deleteBoard = boardId => dispatch => APIUtil.deleteBoard(boardId)
  .then(() => dispatch(removeBoard(boardId)))

export const clearErrors = () => dispatch => dispatch(receiveErrors([]))

