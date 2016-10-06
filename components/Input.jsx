import React, {Component} from 'react'
import actions from '../redux/actions.js'

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

	handleSubmit(e){
		e.preventDefault()
		this.props.dispatch(actions.addTodo(this.state.txt))
	}

	render(){
		return (
			<div>
				<input id="1" type="text" placeholder="hey" onChange = {this.onChange.bind(this)} />
				<button type="text" onClick= {this.handleSubmit.bind(this)}> Button </button>
			</div>
		)
	}
}

export default Input
