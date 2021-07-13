import React from 'react'
import PinsIndexItem from './pins_index_item'

class PinsIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchPins();
    }

    render(){
        return(
            <div className="pin-index">
                {/* {console.log(this.props.pins)} */}
                {this.props.pins.map(pin => (
                    <PinsIndexItem user={this.props.user} pin={pin} key={pin.id}/>))
                }
            </div>
        )
    }
}

export default PinsIndex;