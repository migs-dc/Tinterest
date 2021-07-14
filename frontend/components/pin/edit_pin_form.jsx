import React from 'react';
import PinForm from './pin_form'
import { withRouter } from "react-router-dom"

class EditPinForm extends React.Component {
  componentDidMount(){
    this.props.fetchPin(this.props.match.params.pinId)
  }

  delete(id){
    this.props.deletePin(id)
      .then(() => this.props.history.push('/pins'))
  }

  render() {
    const { action, formType, pin, errors } = this.props

    if (!pin) return null;
    if (!pin.description) pin.description = '';
    return (
      <div className="edit-form">
        <h1>{this.props.formType}</h1>
        <button 
          type="button" 
          className="delete-button"
          onClick={() => this.delete(pin.id)}>
          Delete Pin
        </button>
        <PinForm
          errors={errors}
          edit={true}
          action={action}
          formType={formType}
          pin={pin} />
      </div>
    );
  }
}

export default withRouter(EditPinForm)