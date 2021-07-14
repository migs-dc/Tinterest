import React from 'react'
import { Link } from 'react-router-dom'
import PinsIndexItem from '../pin/pins_index_item'

class boardShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    this.props.fetchBoard(this.props.boardId).then(() => {
      this.setState({ loading: false }) 
    });
  }

  render() {
    const board = this.props.board;
    if (this.state.loading){
      return null;
    } else {
      return(
        <div className="board-show">
          <div>
            <h1>{board.title}</h1>
          </div>
          <div>
            <p>{board.author.username}</p>
          </div>
          <div>
            {board.user_id === this.props.currentUser.id ?
              <>
              <Link to={`${board.id}/edit`}>
                <button>Edit/Delete</button>
              </Link>
              </>
              : ""
            }
          </div>
          <div>
            {(board.pins !== undefined) ?
              board.pins.map(pin => (
                <PinsIndexItem pin={pin} key={pin.id} />
              ))
              : <p>Board is empty</p>
            }
          </div>
        </div>
      )
    }
  }
}

export default boardShow;
