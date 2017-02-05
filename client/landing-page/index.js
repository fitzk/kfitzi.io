import React, { Component } from "react"
import { AppBar } from "material-ui"
import { Link } from "react-router"
import MediaQuery from "react-responsive"
import styled from "styled-components"
import { scroll } from "utils"
import { Row, Column, RowColumn, H1, H2, LinkButton, ProfileImage, A } from "components"
import { MaterialDrawer } from "./drawer"
import me from "./../assets/images/me.jpg"
import { Footer } from "./footer"
import { Projects } from "./../projects"
import { Links } from "./links"
import { LandingPageHeader } from "./header.js"
import { BlackSide } from "./black"

/* esfmt-ignore-start */
const Container = styled.div`
	width: 100%;
	height: 100%;
`
const Children = styled.div`
	flex: 1;
`
const View = styled(RowColumn)`
	height: 90%;
`
const BackgroundWhite = styled(Column)`
	margin: 1em;
	padding: 1em;
`/* esfmt-ignore-end */

export class LandingPage extends Component {
	constructor(props) {
		super(props)
		this.state = { open: false }
		this.updateDrawerState = this.updateDrawerState.bind(this);
	}

	updateDrawerState() {
		this.setState({
			open: !this.state.open
		})
	}

	render() {
		return <div style={ { margin: 0, padding: 0 } }>
           <AppBar onLeftIconButtonTouchTap={ () => this.setState({ open: !this.state.open }) }
                   title="kfitzi"
                   zDepth={ 0 }
                   titleStyle={ { color: "white", fontFamily: "Roboto, Sans-serif" } } />
           <MaterialDrawer open={ this.state.open }
                           updateDrawerState={ this.updateDrawerState } />
           <Container>
             <View>
               <BackgroundWhite alignStart
                                justifyStart
                                onClick={ () => this.setState({ open: false }) }>
                 <LandingPageHeader/>
               </BackgroundWhite>
               <BlackSide>
                 { this.props.children }
               </BlackSide>
             </View>
             <Footer/>
           </Container>
         </div>
	}
}
