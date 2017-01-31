import React from "react"
import getMuiTheme from "material-ui/styles/getMuiTheme"

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import { Card, CardText, Paper, AppBar } from "material-ui"
import MediaQuery from "react-responsive"
// import { About } from "./about"
import Scroll from "react-scroll"
// import Education from "./education"
import { LandingPage } from "./landing-page"
import styled, { ThemeProvider } from "styled-components"
import theme from "./theme"


const App = props => {

	const scrollHeight = 0
	Scroll.animateScroll.scrollTo(scrollHeight)

	return <MuiThemeProvider muiTheme={ getMuiTheme(theme) }>
          <ThemeProvider theme={ theme }>
            <LandingPage>
            </LandingPage>
          </ThemeProvider>
        </MuiThemeProvider>
}

export default App
