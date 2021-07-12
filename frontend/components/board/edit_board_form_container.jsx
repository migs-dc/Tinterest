import React from 'react'
import { connect } from 'react-redux'
import BoardForm from './board_form'
import { fetchBoard, updateBoard } from '../../util/board_api_util'

class EditBoardForm extends React.Component {
  componentDidMount() {
    this.props.fetchBoard(this.props.match.params.boardId);
  }

  render() {
    const { action, formType, board } = this.props

    if (!board) return null;
    return (
      <div>
        <h1>{this.props.formType}</h1>
        <BoardForm
          action={action}
          formType={formType}
          board={board} />
      </div>
    );
  }
}

const mSTP = (state, ownProps) => ({
  board: state.entities.boards[ownProps.match.params.boardId],
  errors: state.errors.session,
  formType: 'Update Board'
});

const mDTP = dispatch => ({
  fetchBoard: boardId => dispatch(fetchBoard(boardId)),
  action: board => dispatch(updateBoard(board))
})

export default connect(mSTP, mDTP)(EditBoardForm)