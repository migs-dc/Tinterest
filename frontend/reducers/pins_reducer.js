import { RECEIVE_PINS, RECEIVE_PIN } from "../actions/pin_actions";

const pinsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PINS:
      return Object.assign({}, action.pins);

    case RECEIVE_PIN:
      return Object.assign({}, state, {[action.pin.id]: action.pin});

    default:
      return state;
  }
};

export default pinsReducer;