import React from 'react'

class PinsIndexItem extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    const { title, user_id, image_url } = this.props.pin;

    return (
      <div>
        <ul>
          <li>{title}</li>
          <li>{user_id}</li>
          <li><img src={window.crow1}/></li>
        </ul>
      </div>
    )  
  }
}
    
export default PinsIndexItem;