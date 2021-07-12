import { connect } from 'react-redux';
import { fetchPins } from '../../actions/pin_actions';
import PinsIndex from './pins_index';

const mSTP = ({ session, entities}) => ({
  pins: Object.values(entities.pins),
  user: entities.users[session.id]
})

const mDTP = dispatch => ({
  fetchPins: () => dispatch(fetchPins())
})

export default connect(mSTP, mDTP)(PinsIndex);