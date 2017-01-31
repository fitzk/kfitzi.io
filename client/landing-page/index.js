import React, { Component } from "react"
import { AppBar, Drawer } from "material-ui"
import Scroll, { Link } from "react-scroll"
import MediaQuery from "react-responsive"
import styled from "styled-components"
import { Row, Column, RowColumn, H1, H2, Button, ProfileImage } from "components"
import me from "./../assets/images/me.jpg"
import Footer from "./footer"
/* esfmt-ignore-start */
export const LandingPageHeader = styled(Row)`
	align-items: center;
	justify-content: center;
	margin-top: 10vh;
`
/* esfmt-ignore-end */


export class LandingPage extends Component {
	constructor(props) {
		super(props)
		this.state = { open: false }
	}
	render() {
		const scrollHeight = 0
		Scroll.animateScroll.scrollTo(scrollHeight)

		return <div style={ { margin: 0, padding: 0 } }>
           <AppBar onLeftIconButtonTouchTap={ () => this.setState({ open: !this.state.open }) }
                   title="kfitzi"
                   titleStyle={ { color: "white" } } />
           <Drawer open={ this.state.open }
                   openSecondary={ true }>
             <Column>
               ♡
             </Column>
           </Drawer>
           <LandingPageHeader>
             <Column>
               <RowColumn>
                 <ProfileImage src={ me } />
                 <Column>
                   { /* esfmt-ignore-start */ }
									<H1>kayla</H1>
									<H1>fitzsimmons</H1>
									<H2> frontend developer </H2>
 									{ /* esfmt-ignore-end */ }
                 </Column>
               </RowColumn>
             </Column>
           </LandingPageHeader>
           <RowColumn>
             <Button nav
                     to="https://fitzk.github.io/resume">
               resume
             </Button>
             <Button nav
                     to="https://github.com/fitzk">
               github
             </Button>
             <Button nav
                     to="https://www.linkedin.com/in/kayla-fitzsimmons-915559130/">
               linkedin
             </Button>
             <Button nav
                     to="http://stackoverflow.com/users/6846678/kfitzi">
               stackoverflow
             </Button>
           </RowColumn>
           { this.props.children }
         </div>
	}
}
