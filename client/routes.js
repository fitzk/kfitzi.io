import React, { Component } from "react"
import { Router, Route, Link, IndexRoute, browserHistory } from "react-router"
import ReactDOM from "react-dom"

import { createStore, applyMiddleware, combineReducers } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import { syncHistoryWithStore, routerReducer } from "react-router-redux"

import { App } from "./app"
import { About } from "./about"
import { ActivityStream } from "./activity"
import { LandingPage } from "./landing-page"
import { Projects } from "./projects"

import reducers from "./reducers"


export class Routes extends Component {

	render() {
		const middleware = [thunk]
		if (process.env.NODE_ENV !== "production") {
			// middleware.push(createLogger())
		}

		const r = combineReducers({ reducers, routing: routerReducer, middle: applyMiddleware(...middleware) });
		const store = createStore(r)

		const history = syncHistoryWithStore(browserHistory, store)

		return <Provider store={ store }>
           <Router history={ history }>
             <Route component={ App }>
               <Route path="/"
                      component={ ActivityStream } />
               <Route path="/projects"
                      component={ Projects } />
             </Route>
           </Router>
         </Provider>
	}
}
