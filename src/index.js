import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import todoApp from './reducers'
import App from './components/App'
import {createLogger} from 'redux-logger'

const logger = createLogger();
let store = createStore(todoApp, applyMiddleware(logger))

render(
	<Provider store={store}>
		<App />
	</Provider>,
    document.getElementById('root')
)