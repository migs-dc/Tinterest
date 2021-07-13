import { RECEIVE_PIN_ERRORS } from "../actions/pin_actions";

const pinErrors = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PIN_ERRORS:
      return action.errors;

    default:
      return state;
  }
}

export default pinErrors;