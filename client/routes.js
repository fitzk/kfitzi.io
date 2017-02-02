import React, { Component } from "react"
import { Router, Route, Link, IndexRoute, browserHistory } from "react-router"
import ReactDOM from "react-dom"
import { App } from "./app"
import { About } from "./about"
import { ActivityStream } from "./activity"
import { LandingPage } from "./landing-page"
import { Projects } from "./projects"


export class Routes extends Component {
	render() {
		return <Router history={ browserHistory }>
           <Route component={ App }>
             <Route path="/"
                    component={ About } />
             <Route path="/activity"
                    component={ ActivityStream } />
             <Route path="/projects"
                    component={ Projects } />
           </Route>
         </Router>
	}
}
