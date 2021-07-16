import { connect } from "react-redux";
import { fetchBoards } from "../../actions/board_actions"
import BoardsIndex from './boards_index'

const mSTP = ({ session, entities }) => ({
  boards: Object.values(entities.boards),
  user: entities.users[session.id],
  currentUser: entities.users[session.id]
})

const mDTP = dispatch => ({
  fetchBoards: () => dispatch(fetchBoards())
})

export default connect(mSTP, mDTP)(BoardsIndex);