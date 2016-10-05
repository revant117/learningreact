import React, {Component} from 'react'
import Display from './Display.jsx'

class Input extends Component{

	constructor(props , context){
		super(props , context)
		this.state = {
			txt: 'initial'
		}
	}

	onChange(e){
		this.setState({
			txt: e.target.value
		})	
	}

	render(){
		return (
			<div>
				<input id="1" type="text" placeholder="hey" onChange = {this.onChange.bind(this)} />
				<Display text={this.state.txt} />
			</div>
		)
	}
}

export default Input
