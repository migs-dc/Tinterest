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
        <div>
          <div>
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
              <p>{this.props.board.title}</p>
              <p>{this.props.currentUser.username}</p>
            </div>
            <div>

            </div>   
          </div>
        </div>
      )
    }
  }
}

export default boardShow;
