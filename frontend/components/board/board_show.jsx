import React from 'react'
import PinsIndexItem from '../pin/pins_index_item'
import EditBoardContainer from './edit_board_form_container'

class boardShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, edit: false };
    this.openEdit = this.openEdit.bind(this);
    this.closeEdit = this.closeEdit.bind(this);
  }

  componentDidMount() {
    this.props.fetchBoard(this.props.boardId)
      .then(() => {this.setState({ loading: false }) 
    });
  }

  openEdit() {
    this.setState({edit: true})
  }

  closeEdit() {
    this.setState({edit: false})
  }

  render() {
    const board = this.props.board;
    if (this.state.loading ){
      return null;
    } else {
      return(
        <div className="board-show">
          <div className="board-edit-background">
          {
            (this.state.edit) ?            
            <EditBoardContainer board={board} 
              closeEdit={() => this.closeEdit().bind(this)} />
            : null
          }
          </div>
          <div>
            <h1>{board.title}</h1>
          </div>
          <div>
            <p>{board.author.username}</p>
          </div>
          <div>
            {board.user_id === this.props.currentUser.id ?
              <>
                <button onClick={this.openEdit}>Edit/Delete</button>
              </>
              : ""
            }
          </div>
          <div>
            {(board.pins !== undefined) ?
              board.pins.map(pin => (
                <PinsIndexItem user={this.props.currentUser} pin={pin} key={pin.id} />
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
