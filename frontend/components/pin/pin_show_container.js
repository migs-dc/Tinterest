import { connect } from 'react-redux'
import { fetchPin } from '../../actions/pin_actions'
import { selectPin } from '../../reducers/selectors'
import PinShow from './pin_show'

const mSTP = (state, {match}) => {
  const pinId = parseInt(match.params.pinId);
  const pin = selectPin(state.entities, pinId);
  return { pinId, pin };
};

const mDTP = dispatch => ({
  fetchPin: id => dispatch(fetchPin(id))
});

export default connect(mSTP, mDTP)(PinShow);