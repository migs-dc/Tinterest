import React from 'react';
import { withRouter } from "react-router-dom"

class EditPinForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = this.props.pin;
    this.update = this.update.bind(this);
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

  delete(id){
    this.props.deletePin(id)
    this.props.history.push('/')
      // .then(() => this.props.history.push('/'))
  }

  handleSubmit(e) {
    e.preventDefault();    
    console.log(this.state)
    this.props.action(this.state)
      .then(() => this.props.closeEdit())
      // .then(res => this.props.history.push(`/pins/${res.pin.id}`))
      // .then(res => this.props.history.push('/'))
    
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
    const { pin } = this.props
    
    // if (!this.props.edit){
    //   return null;
    // } else {
    return  (
      <div className="edit-form">
              
        <form onSubmit={this.handleSubmit} className="pin-form">
          <input type="hidden" 
            name="authenticity_token" 
            value="<%= form_authenticity_token %>"/>

          <div className="title-x">
            <p></p>
            <div className="close-button">
              <a onClick={this.props.closeEdit}>X</a>
            </div>
          </div>
          <h1 className="edit-title">Edit Pin</h1>  
          <div className="top-edit">
            <div>
              <button type="button" onClick={this.resetPage}>Reset</button>              
              <button 
                type="button" 
                className="delete-button"
                onClick={() => this.delete(pin.id)}>
                Delete
              </button>
            </div>
            <div className="right-top">
              {this.renderErrors()} 
              <button className="save-button">Save</button>
            </div>                
          </div>
          <div className="inner-form">
            <div className="info">
              <br />
              <input placeholder="Add your title"
                type="text"
                value={this.state.title}
                onChange={this.update('title')}
              />
              
              <br /><br />
              <textarea placeholder="Tell everyone what your Pin is about"
                type="text"
                value={this.state.description}
                onChange={this.update('description')}
              />           
              <br />
              <input placeholder="Add a destination link"
                type="text"
                value={this.state.image_url}
                onChange={this.update('image_url')}
              />
            </div>
          </div>
        </form>
      </div>
      );
    }
  // }
}

export default withRouter(EditPinForm)