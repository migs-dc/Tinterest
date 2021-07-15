import React from 'react'
import BoardsIndexItem from './boards_index_item'

class BoardsIndex extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchBoards();
  }

  render(){
    return(
      <div className="board-index">
        <h1>{this.props.user.username}</h1>
        <br />
        <div>
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

export default BoardsIndex;