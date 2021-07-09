import React from 'react'
import { Link } from 'react-router-dom'

class pinShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    this.props.fetchPin(this.props.pinId).then(() => {
      this.setState({ loading: false }) 
    });
  }

  render() {
    if (this.state.loading){
      return null;
    } else {
      return(
        <div className="pin-show">
          <h2>User ID: {this.props.pin.user_id}</h2>
          <p>Title: {this.props.pin.title}</p>
          <p>Description: {this.props.pin.description}</p>
          <p>Image URL: {this.props.pin.image_url}</p>
          <img className="test" src={window.crow1} />
          <Link to={`${this.props.pin.id}/edit`}>Edit Pin</Link>
          {/* <Link to={`pins/${this.props.pin.id}/edit`}>Edit Pin</Link> */}
        </div>
      )
    }
  }
}

export default pinShow;
