import { RECEIVE_PINS, RECEIVE_PIN, REMOVE_PIN } from "../actions/pin_actions";

const pinsReducer = (prevState = {}, action) => {
  Object.freeze(prevState);
  switch (action.type) {
    case RECEIVE_PINS:
      return Object.assign({}, action.pins);

    case RECEIVE_PIN:
      return Object.assign({}, prevState, {[action.pin.id]: action.pin})  

    case REMOVE_PIN:
      let nextState = Object.assign({}, prevState);
      delete nextState[action.pinId]
      return Object.assign({})

    default:
      return prevState;
  }
};

export default pinsReducer;