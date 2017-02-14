import React, { Component } from "react";
import { Router, Route, Link, IndexRoute, browserHistory, Redirect } from "react-router";
import ReactDOM from "react-dom";
;
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { syncHistoryWithStore, routerReducer } from "react-router-redux";

import { App } from "./app";
import { ActivityStream } from "./activity";
import { Projects } from "./projects";

import reducers from "./reducers";


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
                      component={ Projects } />
               <Route path="/projects"
                      component={ Projects } />
							<Route path="/activity"
										 component={ ActivityStream } />
             </Route>
						 <Redirect from="/*" to="/" />
           </Router>
         </Provider>
	}
}
