import React from 'react'
import { withRouter, Link } from "react-router-dom"

class BoardForm extends React.Component {
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

  refreshPage(){
    window.location.relaod(false);
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

  handleSubmit(e) {
    e.preventDefault();    
    this.props.action(this.state)
      .then(res => this.props.history.push(`/boards/${res.board.id}`))
  }

  render() {
    return (
      <div className="background">
        <div className="create-board create">
          <div className="close-button">
            <Link to="/">X</Link>
          </div>

          <h1>{this.props.formType}</h1>

          <form onSubmit={this.handleSubmit}>
            <input type="hidden" 
              name="authenticity_token" 
              value="<%= form_authenticity_token %>"/>
            
            {this.renderErrors()}
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

export default withRouter(BoardForm);