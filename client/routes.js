import Layout from "./views/layout"
import About from "./views/about"

import { reducer as uiReducer } from "redux-ui"
import { syncHistoryWithStore, routerReducer } from "react-router-redux"
import thunk from "redux-thunk"
import React, { Component } from "react"
import { Route, Router, IndexRoute, browserHistory } from "react-router"
import ReactDOM from "react-dom"
import { applyMiddleware, createStore, combineReducers, compose } from "redux"
import { Provider } from "react-redux"

let rootReducer = combineReducers({
  routing: routerReducer,
  ui: uiReducer
})

let devTools = window.devToolsExtension ? window.devToolsExtension() : f => f

let middleware = [thunk]

let store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    devTools
  )
)

const history = syncHistoryWithStore(browserHistory, store)

export default class Routes extends Component {
  render() {
    return (
      <div>
			<Provider store={ store }>
		    <Router history={ history }>
		      <Route path="/" component={ Layout }>
		        <IndexRoute component={ About }/>
            </Route>
		    </Router>
		  </Provider>
		</div>)
  }
}
