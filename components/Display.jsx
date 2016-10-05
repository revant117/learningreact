import React, {Component} from 'react'

class Display extends Component{

	render(){
		return (
			<div>
				<h2>{this.props.text}</h2>
			</div>
		)
	}
}

export default Display
