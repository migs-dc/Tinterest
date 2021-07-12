import React from 'react'
import { Link } from 'react-router-dom'

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
    if (this.state.loading){
      return null;
    } else {
      return(
        <div className="board-show">
          <div>
            {this.props.board.user_id === this.props.currentUser.id ?
              <>
              <Link to={`${this.props.board.id}/edit`}>
                <button>Edit Board</button>
              </Link>
              </>
              : ""
            }
          </div>
          <div>
            <h1>{this.props.board.title}</h1>
          </div>
          <div>
            <p>{this.props.currentUser.username}</p>
          </div>
        </div>
      )
    }
  }
}

export default boardShow;
