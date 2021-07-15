import { connect } from 'react-redux'
import { fetchPin } from '../../actions/pin_actions'
import { fetchUser } from '../../actions/session_actions'
import { createPinBoard } from '../../actions/pin_board_actions'
import { selectPin } from '../../reducers/selectors'
import PinShow from './pin_show'

const mSTP = (state, {match}) => {
  const pinId = parseInt(match.params.pinId);
  const pin = selectPin(state.entities, pinId);
  const currentUser = state.entities.users[state.session.id];
  return { pinId, pin, currentUser };
};

const mDTP = dispatch => ({
  fetchPin: id => dispatch(fetchPin(id)),
  fetchUser: id => dispatch(fetchUser(id)),
  save: pinBoard => dispatch(createPinBoard(pinBoard))
});

export default connect(mSTP, mDTP)(PinShow);