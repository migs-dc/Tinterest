import React from 'react';
import { withRouter } from "react-router-dom"

class PinForm extends React.Component {
  constructor(props){
    super(props);

    this.state = this.props.pin;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  handleSubmit() {
    
    this.props.action(this.state)
      .then(res => this.props.history.push(`/pins/${res.pin.id}`))
      // .then(res => console.log(res))
  }

  render() {
    return  (
      <form onSubmit={this.handleSubmit} className="pin-form">
        <input type="hidden" 
          name="authenticity_token" 
          value="<%= form_authenticity_token %>"/>

        <div className="top">
          <button type="button">Delete</button>
          <button>{this.props.formType}</button>
        </div>
        <div className="inner-form">
          <div className="upload-box">
            <div>
              <div>
                Drag and drop 
                <br />
                or
                <br />
                Click to upload
              </div>
            </div>
          </div>
          <div className="info">
            <br />
            <label>Title:
              <input
                type="text"
                value={this.state.title}
                onChange={this.update('title')}
              />
            </label>
            <br />
            <label>Image URL:
              <input
                type="text"
                value={this.state.image_url}
                onChange={this.update('image_url')}
              />
            </label>
            <br />
            <label>Description:
              <textarea
                value={this.state.description}
                onChange={this.update('description')}
              />
            </label>                
          </div>
        </div>
      </form>
    )
  }
}

export default withRouter(PinForm);