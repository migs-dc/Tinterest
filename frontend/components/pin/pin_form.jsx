import React from 'react';
import { withRouter } from "react-router-dom"

class PinForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.pin;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetPage = this.resetPage.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  delete(id) {
    this.props.deletePin(id)
  }

  resetPage() {
    this.setState({
      title: pin.title,
      description: pin.description,
      image_url: pin.image_url
    })
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
      .then(res => this.props.history.push(`/pins/${res.pin.id}`))
    // this.props.history.push(`/pins/${res.pin.id}`);
  }

  render() {
    return  (
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
    )
  }
}

export default withRouter(PinForm);