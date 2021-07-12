import { connect } from "react-redux";
import PinForm from './pin_form';
import { createPin } from '../../actions/pin_actions'

const mSTP = state => ({
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
  action: pin => dispatch(createPin(pin))
});

export default connect(mSTP, mDTP)(PinForm);
