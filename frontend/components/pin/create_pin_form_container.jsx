import { connect } from "react-redux";
import PinForm from './pin_form';
import { createPin, clearErrors } from '../../actions/pin_actions'

const mSTP = state => ({
  errors: state.errors.session,
  pin: {
    title: '',
    image_url: '',
    user_id: state.entities.users.userId,
    description: '',
  },
  username: state.entities.users.username,
  errors: state.errors.session,
  formType: 'Create Pin'
});

const mDTP = dispatch => ({
  action: pin => dispatch(createPin(pin)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mSTP, mDTP)(PinForm);
