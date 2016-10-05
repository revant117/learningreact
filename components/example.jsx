import React, {Component} from 'react'

class Input extends Component{

	constructor(){
		super()
		this.state= {
			isValid1 : false, 
			isValid2 : false,
			isValidForm: false
		}
	}

	handleChange(e){
		let otherid = 'isValid' + (e.target.id === '1' ? 2 : 1)
		let id = 'isValid' + e.target.id
		let newObj = {
			[id] : this.isValid(e.target.id, e.target.value)
		}
		newObj.isValidForm = newObj[id] && this.state[otherid] ? true : false
		this.setState(newObj)
	}

	handleClick(e){
		alert('yoyo')
	}

	isValid(target, value) {
		switch (target) {
			case '1':
				return value.length > 0
			case '2':
				return value === 'whore'
			case '3':
				return value === "on"
			default:
			 	return false
		}
	}


	// componentWillMount() {
	//     console.log('will mount')
	// }
	// componentDidMount() {
	//     console.log('mounted')
	// }
	// componentWillUpdate(nextProps, nextState) {
	// }
	// componentDidUpdate(prevProps, prevState) {
	//     console.log('updated') 
	// }

	render(){
		return (
			<div>
				<input id="1" type="text" placeholder="hey" onKeyUp={this.handleChange.bind(this)}/>
				<input id="2" type="text" placeholder="hey1" onKeyUp={this.handleChange.bind(this)}/>
				<button id="4" type="button" onClick={this.handleClick.bind(this)} > {this.state.isValidForm} </button>
				<h1>{this.state.txt}</h1>
			</div>
		)
	}
}

export default Input


// component lifecycle methods
// pass props
// use this.props.children
// multiple components

// use reactproptypes and defaultproptypes