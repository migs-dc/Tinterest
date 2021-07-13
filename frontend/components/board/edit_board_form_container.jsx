import { connect } from 'react-redux';
import EditBoardForm from './edit_board_form';
import { fetchBoard, updateBoard, deleteBoard, clearErrors } from '../../actions/board_actions'

const mSTP = (state, ownProps) => ({
  board: state.entities.boards[ownProps.match.params.boardId],
  errors: state.errors.board,
  formType: 'Update Board'
});

const mDTP = dispatch => ({
  fetchBoard: boardId => dispatch(fetchBoard(boardId)),
  deleteBoard: boardId => dispatch(deleteBoard(boardId)),
  clearErrors: () => dispatch(clearErrors()),
  action: board => dispatch(updateBoard(board))
})

export default connect(mSTP, mDTP)(EditBoardForm)