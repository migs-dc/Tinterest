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
        <h1>Boards</h1>
        <br />
        {this.props.boards.map(board => (
          <BoardsIndexItem user={this.props.user} board={board} key={board.id} />))
        }
      </div>
    )
  }
}

export default BoardsIndex;