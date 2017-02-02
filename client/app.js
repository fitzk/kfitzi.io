import React from "react"
import getMuiTheme from "material-ui/styles/getMuiTheme"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import { LandingPage } from "./landing-page"
import { ThemeProvider } from "styled-components"
import theme from "./theme"
import { About } from "./about"


export const App = ({children, ...props}) => {
	return <MuiThemeProvider muiTheme={ getMuiTheme(theme) }>
          <ThemeProvider theme={ theme }>
            <LandingPage>
              { children }
            </LandingPage>
          </ThemeProvider>
        </MuiThemeProvider>
}
