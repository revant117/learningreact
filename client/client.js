import React from 'react'
import { render} from 'react-dom'
import App from '../components/App.jsx'
import configureStore from '../redux/store.js'
import {Provider} from 'react-redux'

let initialState = {
	todos: [{
		id:0,
		completed:false,
		text: "I need to do a lot of stuff !!!!"
	}]
}

let store = configureStore(initialState)

render(
	<Provider store={store}>
		<App />
	< / Provider >,
	document.getElementById('app')
)



