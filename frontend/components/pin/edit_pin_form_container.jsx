import React from 'react'
import { connect } from 'react-redux'
import PinForm from './pin_form'
import { fetchPin, updatePin } from '../../actions/pin_actions'

class EditPinForm extends React.Component {
  componentDidMount(){
    this.props.fetchPin(this.props.match.params.pinId)
  }

  render() {
    const { action, formType, pin } = this.props

    if (!pin) return null;
    if (!pin.description) pin.description = '';
    return (
      <div>
        <h1>{this.props.formType}</h1>
        <PinForm
          action={action}
          formType={formType}
          pin={pin} />
      </div>
    );
  }
}

const mSTP = (state, ownProps) => ({
  pin: state.entities.pins[ownProps.match.params.pinId],
  errors: state.errors.session,
  formType: 'Update Pin'
});

const mDTP = dispatch => ({
  fetchPin: pinId => dispatch(fetchPin(pinId)),
  action: pin => dispatch(updatePin(pin))
});

export default connect(mSTP, mDTP)(EditPinForm)