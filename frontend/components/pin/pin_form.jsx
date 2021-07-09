import React from 'react';

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
    this.props.action(this.state);
  }

  render() {
    return  (
      <form onSubmit={this.handleSubmit}>
        <h1>{this.props.formType}</h1>
        <label>Title:
          <input
            type="text"
            value={this.state.title}
            onChange={this.update('title')}
          />
        </label>

        <label>Image URL:
          <input
            type="text"
            value={this.state.image_url}
            onChange={this.update('image_url')}
          />
        </label>

        <input type="submit" value={this.props.formType} />
      </form>
    )
  }
}

export default PinForm;