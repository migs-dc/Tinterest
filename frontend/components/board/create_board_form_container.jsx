import { connect } from "react-redux";
import BoardForm from './board_form';
import { createBoard, clearErrors } from '../../actions/board_actions'

const mSTP = state => ({
  board: {
    title: '',
    user_id: state.entities.users.userId
  },
  username: state.entities.users.username,
  errors: state.errors.board,
  formType: 'Create Board'
});

const mDTP = dispatch => ({
  action: board => dispatch(createBoard(board)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mSTP, mDTP)(BoardForm);
