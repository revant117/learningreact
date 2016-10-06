let actions =  {
	addTodo: function(text){
		return {
			type: 'ADD',
			text: text
		}
	}
}

export default actions