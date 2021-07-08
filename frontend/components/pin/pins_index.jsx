import React from 'react'
import PinsIndexItem from './pins_index_item'

class PinsIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchPins();
    }

    render(){
        return(
            <div>
                <h1>Pins: </h1>
                {this.props.pins.map(pin => (
                    <PinsIndexItem pin={pin} key={pin.id}/>))
                }
            </div>
        )
    }
}

export default PinsIndex;