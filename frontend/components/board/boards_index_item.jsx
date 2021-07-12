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
        { this.props.user ? 
          <>
          <Link to={`boards/${id}`}>
            <div>
              <h3>Title: {title}</h3>
            </div>
          </Link>
          </>
          :
          <>
          <Link to={`/login`}>
            <div>
              <h3>Title: {title}</h3>
            </div>
          </Link>
          </>
        }
      </div>
    )
  }
}

export default BoardsIndexItem;