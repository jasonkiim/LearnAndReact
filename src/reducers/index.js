import {combineReducers} from 'redux'
import items from './items'

const todoApp = combineReducers({
	settingsReducer: 	items
})

export default todoApp