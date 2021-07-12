import React from 'react'
import { withRouter } from "react-router-dom"

class BoardForm extends React.Component {
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

  refreshPage(){
    window.location.relaod(false);
  }

  handleSubmit() {
    this.props.action(this.state)
      .then(res => this.props.history.push(`/boards/${res.board.id}`))
  }

  render() {
    return (
      <div className="create-board">
        <h1>{this.props.formType}</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="hidden" 
            name="authenticity_token" 
            value="<%= form_authenticity_token %>"/>
          
          <input placeholder="Board Title"
            type="text"
            value={this.state.title}
            onChange={this.update('title')}
          />
         
          <br />
          <button>{this.props.formType}</button>
        </form>
      </div>
    )
  }
}

export default withRouter(BoardForm);