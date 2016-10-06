import { applyMiddleware , compose , createStore} from 'redux'
import reducer from './reducer.js'
import logger from 'redux-logger'

let finalCreateStore = compose(
		applyMiddleware(logger())
	)(createStore)

export default function configureStore(initialState = { todos: []}){
	return finalCreateStore(reducer , initialState)
}