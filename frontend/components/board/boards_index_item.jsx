import React from 'react'
import { Link } from 'react-router-dom'

class BoardsIndexItem extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    const { id, title, user_id } = this.props.board

    return (
      <div>
        <Link to={`/boards/${id}`}>
          <div>
            <p>{title}</p>
          </div>
        </Link>
      </div>
    )
  }
}

export default BoardsIndexItem;