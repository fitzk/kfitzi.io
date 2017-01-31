import React, { Component } from "react"
import { Route, Router, IndexRoute, browserHistory } from "react-router"
import ReactDOM from "react-dom"
import App from "./app"
import { About } from "./about"

export default class Routes extends Component {
	render() {
		return <Router history={ browserHistory }
                 key={ Math.random() }>
           <Route path="/"
                  component={ App } />
           <Route path="/about"
                  component={ About } />
         </Router>
	}
}
