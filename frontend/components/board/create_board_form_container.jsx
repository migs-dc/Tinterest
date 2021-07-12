import { connect } from "react-redux";
import BoardForm from './board_form';
import { createBoard } from '../../actions/board_actions'

const mSTP = state => ({
  board: {
    title: '',
    user_id: state.entities.users.userId
  },
  username: state.entities.users.username,
  errors: state.errors.session,
  formType: 'Create Board'
});

const mDTP = dispatch => ({
  action: board => dispatch(createBoard(board))
});

export default connect(mSTP, mDTP)(BoardForm);
