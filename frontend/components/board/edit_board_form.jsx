import React from 'react';
import { Link, withRouter } from "react-router-dom"

class EditBoardForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.board;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount(){
    this.props.clearErrors()
  }
  
  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state)
      .then(() => this.props.closeEdit())
      // .then(() => this.props.history.push('/boards'))
  }

  delete(id){
    this.props.deleteBoard(id)
    this.props.history.push('/boards')
      // .then(() => this.props.history.push('/boards'))
  }

  renderErrors() {
    return(
      <ul className="errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { formType, board } = this.props

    if (!board) return null;
    if (!board.description) board.description = '';
    return (
      <div className="background">
        <div className="create-board edit-board">
          
          <form onSubmit={this.handleSubmit}>
            <input type="hidden" 
              name="authenticity_token" 
              value="<%= form_authenticity_token %>"/>

            <div className="close-button">
              <a onClick={this.props.closeEdit}>X</a>
            </div>

            <h1>{formType}</h1>
            {this.renderErrors()}

            <button type="button" 
                    className="edit-delete-button"
                    onClick={() => this.delete(board.id)}>
              Delete Board
            </button>
            <br />
            <br />
            <br />
            <input placeholder="Board Title"
              type="text"
              value={this.state.title}
              onChange={this.update('title')}
            />
            <br />
            <button>{this.props.formType}</button>

            {/* add display board*/}


          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(EditBoardForm)