import * as APIUtil from '../util/pin_api_util';

export const RECEIVE_PINS = 'RECEIVE_PINS';
export const RECEIVE_PIN = 'RECEIVE_PIN';
export const REMOVE_PIN = 'REMOVE_PIN';
export const RECEIVE_PIN_ERRORS = 'RECEIVE_PIN_ERRORS';

export const receivePins = pins => ({
  type: RECEIVE_PINS,
  pins,
});

export const receivePin = pin => ({
  type: RECEIVE_PIN,
  pin
})

export const removePin = pinId => ({
  type: REMOVE_PIN,
  pinId
})

export const receiveErrors = errors => ({
  type: RECEIVE_PIN_ERRORS,
  errors
})

export const fetchPins = () => dispatch => APIUtil.fetchPins()
  .then(pins => dispatch(receivePins(pins)))

export const fetchPin = id => dispatch => APIUtil.fetchPin(id)
  .then(pin => dispatch(receivePin(pin)))

// export const createPin = pin => dispatch => APIUtil.createPin(pin)
//   .then(pin => (dispatch(receivePin(pin))),
//     error => (dispatch(receiveErrors(error.responseJSON)))
//   )

export const createPin = pin => dispatch => {
  return APIUtil.createPin(pin).then(
    pin => dispatch(receivePin(pin)),
    error => {
      // debugger
      return dispatch(receiveErrors(error.responseJSON))
    }
  )
}

export const updatePin = pin => dispatch => APIUtil.updatePin(pin)
  .then(updatedPin => (dispatch(receivePin(updatedPin))),
    error => (dispatch(receiveErrors(error.responseJSON)))
  )

export const deletePin = pinId => dispatch => APIUtil.deletePin(pinId)
  .then(() => dispatch(removePin(pinId)))

export const clearErrors = () => dispatch => dispatch(receiveErrors([]))