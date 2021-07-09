import * as APIUtil from '../util/pin_api_util';

export const RECEIVE_PINS = 'RECEIVE_PINS';
export const RECEIVE_PIN = 'RECEIVE_PIN';

export const receivePins = pins => ({
  type: RECEIVE_PINS,
  pins,
});

const receivePin = pin => ({
  type: RECEIVE_PIN,
  pin
})

export const fetchPins = () => dispatch => APIUtil.fetchPins()
  .then(pins => dispatch(receivePins(pins)))

export const fetchPin = id => dispatch => APIUtil.fetchPin(id)
  .then(pin => dispatch(receivePin(pin)))

export const createPin = pin => dispatch => APIUtil.createPin(pin)
  .then(pin => dispatch(receivePin(pin)))

export const updatePin = pin => dispatch => APIUtil.updatePin(pin)
  .then(updatedPin => dispatch(receivePin(updatedPin)))