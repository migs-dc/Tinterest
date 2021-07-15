import React, { useState } from 'react'
import { Link } from 'react-router-dom'

class pinShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
    this.handleToUpdate = this.handleToUpdate.bind(this)
  }

  componentDidMount() {
    this.props.fetchPin(this.props.pinId).then(()=> {
      this.props.fetchUser(this.props.currentUser.id).then(res => {
        this.setState({ boards: res.user.boards, loading: false})
        let firstTitle = this.state.boards[0].title;
        this.setState({top: firstTitle})
      })
    })
    
  }

  handleToUpdate(title, id) {
    this.setState({top: title, boardId: id});
  }

  savePin(pinId) {
    console.log(pinId)
    this.props.save({board_id: this.state.boarId, pin_id: pinId})
  }

  render() {
    if (this.state.loading){
      return null;
    } else {
      return(
        <div className="pin-show">
          <div className="left">
            <img className="test" src={this.props.pin.image_url} />
          </div>
          <div className="right">
            <div className="top-nav">
              {this.props.pin.user_id === this.props.currentUser.id ?
                <>
                <Link to={`${this.props.pin.id}/edit`}>
                  <button>Edit/Delete</button>
                </Link>
                </>
                : ""
              }              
              <DropDown top={this.state.top}>
                <ul>
                  {(this.state.boards !== undefined) ?
                    this.state.boards.map(board => (
                      <li key={board.id}>
                        <a onClick={() => this.handleToUpdate(board.title, board.id)}>
                          {board.title}
                        </a>
                      </li>
                    ))
                    : <li>you have no boards</li> // create a board instead take this out of the ul
                  }
                </ul>
              </DropDown>
              {/* {console.log(this.state)} */}
              <button onClick={() => this.savePin(this.props.pin.id)}>
                save
              </button>
            </div>
            <div className="mid">
              <p>{this.props.pin.title}</p>
              <p>{this.props.pin.description}</p>
              <div className="author">
                {this.props.pin.author.username}
              </div>
            </div>
            <div className="bot-nav">
              <a href={this.props.pin.image_url}>image link</a>
            </div>   
          </div>
        </div>
      )
    }
  }
}

function DropDown(props) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <a onClick={() => setOpen(!open)}>
        {props.top} <i className="fas fa-angle-down"></i>
      </a>

      {open && props.children}
    </div>
  );
}

export default pinShow;
