import { connect } from "react-redux";
import PinForm from './pin_form';
import { createPin, clearErrors } from '../../actions/pin_actions'

const mSTP = state => ({
  errors: state.errors.pin,
  pin: {
    title: '',
    image_url: '',
    user_id: state.session.id,
    description: '',
  },
  username: state.entities.users.username,
  formType: 'Create Pin'
});

const mDTP = dispatch => ({
  action: pin => dispatch(createPin(pin)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mSTP, mDTP)(PinForm);
