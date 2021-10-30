import { connect } from 'react-redux'
import follows from './follow'

const mSTP = (state) => {
  return {
    currentUser: entities.users[session.id]
  };
}

const mDTP = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(follows);