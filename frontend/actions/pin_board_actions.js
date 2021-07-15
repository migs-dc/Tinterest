import * as APIUtil from '../util/pin_boards_api_util';

export const RECEIVE_PIN_BOARD = 'RECEIVE_PIN_BOARD';
export const REMOVE_PIN_BOARD = 'REMOVE_PIN_BOARD';

export const receivePinBoard = pinBoard => ({
  type: RECEIVE_PIN_BOARD,
  pinBoard
})

export const removePinBoard = pinBoardId => ({
  type: REMOVE_PIN_BOARD,
  pinBoardId
})

export const createPinBoard = pinBoard => dispatch => APIUtil.createPinBoard(pinBoard)
  .then(pinBoard => dispatch(receivePinBoard(pinBoard)))

export const deletePinBoard = pinBoardId => dispatch => APIUtil.deletePinBoard(pinBoardId)
  .then(() => dispatch(removeBoard(pinBoardId)))