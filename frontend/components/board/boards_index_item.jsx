import React from 'react'
import { Link } from 'react-router-dom'

class BoardsIndexItem extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    const { id, title, pins } = this.props.board    
    // const src = this.props.board.pins[0].image_url
    // console.log(this.props.board.pins[0].image_url)

    return (
      <div className="board-index-item">
        <Link to={`/boards/${id}`}>
          <div>
            {
              (pins.length < 1) ? 
                <div className="img-icon-div">
                  <i className="far fa-file-image"></i>
                </div>
                : <img src={pins[0].image_url}/>                
            }
            <p>{title}</p>
            <p>pins: {pins.length}</p>
          </div>
        </Link>
      </div>
    )
  }
}

export default BoardsIndexItem;