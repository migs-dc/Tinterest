import React from 'react'

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
          <h2>{this.props.pin.user_id}</h2>
          <p>{this.props.pin.title}</p>
          <p>{this.props.pin.image_url}</p>
          <img className="test" src={window.crow1} />
        </div>
      )
    }
  }
}

export default pinShow;
