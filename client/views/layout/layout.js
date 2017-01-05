import React, { Component, PropTypes } from "react"
import injectTapEventPlugin from "react-tap-event-plugin"
import getMuiTheme from "material-ui/styles/getMuiTheme"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import Scroll, { Link } from "react-scroll"
import AppBar from "shared_components/app-bar"
import theme from "./_muitheme"
import DrawerComponent from "shared_components/drawer"

export default class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      openSM: false,
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state !== nextState || this.props !== nextProps) {
      return true
    }
    return false
  }

  onClick() {
    this.setState({
      open: !this.state.open,
    })
  }

  render() {
    return (
      <span>
	      <MuiThemeProvider muiTheme={ getMuiTheme(theme) }>
				 <div>
						 <div className="main-container">
							 { this.props.children }
						 </div>
						 <div className="scroll-arrow">
							 <Link to="" onClick={() => {
        Scroll.animateScroll.scrollTo(0)
      }} smooth={ true } duration={ 500 }>
								 <i className="fa fa-arrow-circle-up fa-4x"/>
						 </Link>
					 </div>
				 </div>
			 </MuiThemeProvider>
	 </span>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node
}
