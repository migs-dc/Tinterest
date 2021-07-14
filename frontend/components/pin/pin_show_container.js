import { connect } from 'react-redux'
import { fetchPin, deletePin } from '../../actions/pin_actions'
import { fetchUser } from '../../actions/session_actions'
import { selectPin } from '../../reducers/selectors'
import PinShow from './pin_show'

const mSTP = (state, {match}) => {
  const pinId = parseInt(match.params.pinId);
  const pin = selectPin(state.entities, pinId);
  // console.log(pin);
  // console.log(pin.author);

  const currentUser = state.entities.users[state.session.id];
  // console.log(currentUser);
  // const currentUser = state.entities.users[state.session.id];
  // const boards = state.session.users;
  return { pinId, pin, currentUser };
};

const mDTP = dispatch => ({
  fetchPin: id => dispatch(fetchPin(id)),
  fetchUser: id => dispatch(fetchUser(id))
});

export default connect(mSTP, mDTP)(PinShow);