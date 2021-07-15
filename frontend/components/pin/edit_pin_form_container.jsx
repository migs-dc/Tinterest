import { connect } from 'react-redux'
import EditPinForm from './edit_pin_form';
import { fetchPin, updatePin, deletePin, clearErrors } from '../../actions/pin_actions'

const mSTP = ( state ) => {
  const errors = state.errors.pin;
  // const pin = state.entities.pins[ownProps.match.params.pinId];
  // const formType = 'Update Pin';
  // return { errors, pin, formType }
  return { errors }
};

const mDTP = dispatch => ({
  fetchPin: pinId => dispatch(fetchPin(pinId)),
  deletePin: pinId => dispatch(deletePin(pinId)),
  clearErrors: () => dispatch(clearErrors()),
  action: pin => dispatch(updatePin(pin))
});

export default connect(mSTP, mDTP)(EditPinForm)