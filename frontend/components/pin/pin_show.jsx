import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import EditPinContainer from './edit_pin_form_container'

class pinShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, edit: false };
    this.handleToUpdate = this.handleToUpdate.bind(this);
    this.openEdit = this.openEdit.bind(this);
    this.closeEdit = this.closeEdit.bind(this);
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
    const pinBoard = {board_id: this.state.boardId, pin_id: pinId}
    this.props.save(pinBoard)
  }

  openEdit() {
    this.setState({edit: true})
  }

  closeEdit() {
    this.setState({edit: false})
  }

  render() {
    if (this.state.loading){
      return null;
    } else {
      return(
        <div className="pin-show">        
          { 
            this.state.edit ?
            <EditPinContainer pin={this.props.pin} 
              closeEdit={() => this.closeEdit().bind(this)} />
            : null
          }            
          <div className="left"
            style={{backgroundImage: `url(${this.props.pin.image_url})` }}
          >
            {/* <img className="test" src={this.props.pin.image_url} /> */}
          </div>
          <div className="right">
            <div className="top-nav">
              <div>
                {this.props.pin.user_id === this.props.currentUser.id ?
                  <>
                    <button onClick={this.openEdit}>Edit/Delete</button>
                  </>
                  : ""
                }              
              </div>
              <div className="top-nav-right">
                <DropDown top={this.state.top}>
                  <ul className="dropdown">
                    {(this.state.boards !== undefined) ?
                      this.state.boards.map(board => (
                        <a onClick={() => this.handleToUpdate(board.title, board.id)}>
                          <li className="items" key={board.id}>
                            {board.title}
                          </li>
                        </a>
                      ))
                      : <li>you have no boards</li>// create a board instead take this out of the ul
                    }
                  </ul>
                </DropDown>
                <button className="save" onClick={() => this.savePin(this.props.pin.id)}>
                  save
                </button>
              </div>
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
      <button onClick={() => setOpen(!open)}>
        {props.top} <i className="fas fa-angle-down"></i>
      </ button>

      {open && props.children}
    </div>
  );
}

export default withRouter(pinShow);