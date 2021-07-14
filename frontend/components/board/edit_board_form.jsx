import React from 'react';
import { Link, withRouter } from "react-router-dom"

class EditBoardForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.board;
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  handleSubmit() {
    this.props.action(this.state)
      .then(() => this.props.history.push(`/boards/`))
  }

  componentDidMount(){
    this.props.fetchBoard(this.props.match.params.boardId)
  }

  delete(id){
    this.props.deleteBoard(id)
      .then(() => this.props.history.push('/boards'))
  }

  render() {
    const { action, formType, board, errors } = this.props

    if (!board) return null;
    if (!board.description) board.description = '';
    return (
      <div className="background">
        <div className="create-board">
          <div className="close-button">
            <Link to="/">X</Link>
          </div>
          <form onSubmit={this.handleSubmit}>
            <input type="hidden" 
              name="authenticity_token" 
              value="<%= form_authenticity_token %>"/>
            <h1>{formType}</h1>

            <button type="button" 
                    className="edit-delete-button"
                    onClick={() => this.delete(board.id)}>
              Delete Board
            </button>

            <input placeholder="Board Title"
              type="text"
              value={this.state.title}
              onChange={this.update('title')}
            />
            <br />
            <button>{this.props.formType}</button>
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(EditBoardForm)