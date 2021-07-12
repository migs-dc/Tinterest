import React from 'react'
import { Link } from 'react-router-dom';

class PinsIndexItem extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    const { id, title, user_id, image_url } = this.props.pin;

    return (
      <div className="pin">
        { this.props.user ? 
          <>
          <Link to={`/pins/${id}`}>
            <img className="test" src={window.crow1} />
          </Link>
          </>
          :
          <>
          <Link to={`/login`}>
            <img className="test" src={window.crow1} />
          </Link>
          </>
        }
      </div>
    )  
  }
}
    
export default PinsIndexItem;