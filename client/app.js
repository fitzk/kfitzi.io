import React from "react"
import getMuiTheme from "material-ui/styles/getMuiTheme"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import { LandingPage } from "./main"
import { ThemeProvider, injectGlobal } from "styled-components"
import theme from "./theme"
import { browser } from "components/media"

injectGlobal`
	font-family: Roboto, Sans-serif;
	${
		browser.Safari`
			min-width: 320px;
			max-width: 414px;
			min-height: 568px;
			max-height: 736px;
			overflow-x: hidden;
		`
	}
	body, #app {
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		overflow-x: hidden;
		min-height: 1000px;
	}
`
export const App = ({children, ...props}) => {
	return <MuiThemeProvider muiTheme={ getMuiTheme(theme) }>
          <ThemeProvider theme={ theme }>
            <LandingPage>
              { children }
            </LandingPage>
          </ThemeProvider>
        </MuiThemeProvider>
}
