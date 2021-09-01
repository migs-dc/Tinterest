import React from 'react'
import { Link } from 'react-router-dom';
import BoardsIndexItem from './boards_index_item'

class BoardsIndex extends React.Component {
  constructor(props){
    super(props)
    this.state = { loading: true }
  }

  componentDidMount(){
    this.props.fetchBoards()
      .then(() => {this.setState({ loading: false })})
  }

  render(){
    if (this.state.loading ){
      return null;
    } else {
      return(
        <div className="board-index">
          <div className="dp">
          {
            this.props.currentUser.displayPicture 
            ? <img src={this.props.displayPicture} className="nav-img"/>
            : <i className="far fa-user"></i>
          }
          </div>
          <h1>{this.props.user.username}</h1>
          <br />
          <Link to='/create-board'><button className="cb-button">Create Board</button></Link>
          <button className="follow-button">Follow</button>
          <div className="board-index-box">
            {this.props.boards.map(board => {
              if (board.user_id === this.props.user.id) {
                return <BoardsIndexItem 
                  user={this.props.user}
                  board={board} 
                  key={board.id} />              
              } 
            })
            }
          </div>
        </div>
      )
    }
  }
}

export default BoardsIndex;