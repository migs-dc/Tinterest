import React from 'react'

class PinsIndexItem extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    const { title, user_id, image_url } = this.props.pin;

    return (
      <div class="pin">
        <img className="test" src={window.crow1} />
        <img className="test" src={window.crow2} />
        <img className="test" src={window.crow3} />
      </div>
    )  
  }
}
    
export default PinsIndexItem;