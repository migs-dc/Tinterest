import React from 'react';
import { withRouter } from "react-router-dom"

class EditPinForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.pin;
    console.log(this.state)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.fetchPin(this.props.match.params.pinId)
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
      .then(() => this.props.history.push('/pins'))
  }

  handleSubmit(e) {
    e.preventDefault();    
    console.log(this.state)
    this.props.action(this.state)
      .then(res => this.props.history.push(`/pins/${res.pin.id}`))
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
    const { action, formType, pin, errors } = this.props

    if (!pin) return null;
    if (!pin.description) pin.description = '';
    return (
      <div className="edit-form">
        <h1>{this.props.formType}</h1>
        <button 
          type="button" 
          className="delete-button"
          onClick={() => this.delete(pin.id)}>
          Delete Pin
        </button>
        <div>
          <form onSubmit={this.handleSubmit} className="pin-form">
            <input type="hidden" 
              name="authenticity_token" 
              value="<%= form_authenticity_token %>"/>

            <div className="top">
              <button type="button" onClick={this.resetPage}>Reset</button>
              {this.renderErrors()}   
              <button>Save</button>
            </div>
            <div className="inner-form">
              <div className="upload-box">
                <div>
                  Drag and drop 
                  <br />
                  or
                  <br />
                  Click to upload
                </div>
              </div>
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
      </div>
    );
  }
}

export default withRouter(EditPinForm)