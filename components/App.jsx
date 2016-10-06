import React, {Component} from 'react'
import Input from './Input.jsx'
import List from './List.jsx'
import { connect } from 'react-redux'

class App extends Component{
	render(){
		return (
			<div>
				<h1>Your Todo List</h1>
				<Input dispatch={this.props.dispatch}/>
				<List  todos={this.props.todos}/>
			</div>
		)
	}
}

function mapStateToProps(state){
	return state
}

export default connect(mapStateToProps)(App)