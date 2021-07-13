import { connect } from 'react-redux'
import { fetchBoard } from '../../actions/board_actions'
import { selectBoard } from '../../reducers/selectors'
import BoardShow from './board_show'

const mSTP = (state, {match}) => {
  const boardId = parseInt(match.params.boardId);
  const board = selectBoard(state.entities, boardId);
  const currentUser = state.entities.users[state.session.id];
  // const pins = Object.values(state.entities.boards.pins);
  return { boardId, board, currentUser};
};

const mDTP = dispatch => ({
  fetchBoard: id => dispatch(fetchBoard(id))
});

export default connect(mSTP, mDTP)(BoardShow);