import { connect } from 'react-redux'
import EditPinForm from './edit_pin_form';
import { fetchPin, updatePin, deletePin, clearErors } from '../../actions/pin_actions'

const mSTP = (state, ownProps) => ({
  errors: state.errors.session,
  pin: state.entities.pins[ownProps.match.params.pinId],
  errors: state.errors.session,
  formType: 'Update Pin'
});

const mDTP = dispatch => ({
  fetchPin: pinId => dispatch(fetchPin(pinId)),
  deletePin: pinId => dispatch(deletePin(pinId)),
  clearErrors: () => dispatch(clearErrors()),
  action: pin => dispatch(updatePin(pin))
});

export default connect(mSTP, mDTP)(EditPinForm)