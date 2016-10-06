function getId(state){
	return state.todos.reduce((maxId , todo)=>{
		return Math.max(maxId , todo.id)
	} , -1)+1
}
// reduce gets the starting value as the first parameter and then its the returned value
// so basically it loops thru al the todo.ids and finds the largest and then adds 1 to it


export default function reducer(state , action){
	switch (action.type){
		case  'ADD':
			return Object.assign({} , state , {
				todos: [{
					text: action.text,
					completed: false,
					id: getId(state)
				} , ...state.todos]
			})
		default:
			return state
	}
}