import { connect } from 'react-redux'
import follows from './follow'

const mSTP = (state) => {
  
}

const mDTP = dispatch => ({
  //followers
  updateFollowers: id => dispatch(fetchFollowers(id));
})

export default connect(mSTP, mDTP)(follows);