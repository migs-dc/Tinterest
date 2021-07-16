import React from 'react'
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
}

export default BoardsIndex;