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
            {board.user_id === this.props.currentUser.id ?
              <>
              <Link to={`${board.id}/edit`}>
                <button>Edit Board</button>
              </Link>
              </>
              : ""
            }
          </div>
          <div>
            <h1>{board.title}</h1>
          </div>
          <div>
            <p>{board.username}</p>
          </div>
          <div>
            {board.pins.map(pin => (
              <PinsIndexItem pin={pin} key={pin.id} />
            ))}
          </div>
        </div>
      )
    }
  }
}

export default boardShow;
