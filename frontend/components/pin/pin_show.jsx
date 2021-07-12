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
          <div className="left">
            <img className="test" src={window.crow1} />
          </div>
          <div className="right">
            <div className="top-nav">
              {this.props.pin.user_id === this.props.currentUser.id ?
                <>
                <Link to={`${this.props.pin.id}/edit`}>
                  <button>Edit Pin</button>
                </Link>
                </>
                : ""
              }
            </div>
            <div className="mid">
              <p>{this.props.pin.title}</p>
              <p>{this.props.pin.description}</p>
              <p>User ID: {this.props.pin.user_id}</p>
              {/* <p>CU ID: {this.props.currentUser.id}</p> */}
            </div>
            <div className="bot-nav">
              <a href="{this.props.pin.image_url}">image link</a>
            </div>   
          </div>
          {/* <Link to={`pins/${this.props.pin.id}/edit`}>Edit Pin</Link> */}
        </div>
      )
    }
  }
}

export default pinShow;
