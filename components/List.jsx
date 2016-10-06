import React, {Component} from 'react'

class List extends Component{

	constructor(props , context){
		super(props , context)
		this.state = {
		}
	}

	render(){
		return (
			<div>
				<ul>
					{
						this.props.todos.map((todo) => {
							return <li key={todo.id}> {todo.text}</li>
						})	
					}
				</ul>
			</div>
		)
	}
}

export default List