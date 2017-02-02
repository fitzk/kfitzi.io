import React, { Component } from "react"
import { AppBar, Drawer } from "material-ui"
import { Link } from "react-router"
import MediaQuery from "react-responsive"
import styled from "styled-components"
import { scroll } from "utils"
import { Row, Column, RowColumn, H1, H2, Button, ProfileImage } from "components"
import me from "./../assets/images/me.jpg"
import { Footer } from "./footer"
import { Projects } from "./../projects"

/* esfmt-ignore-start */
export const LandingPageHeader = styled(Row)`
	margin-top: 10vh;
`/* esfmt-ignore-end */

export class LandingPage extends Component {
	constructor(props) {
		super(props)
		this.state = { open: false }
	}
	render() {
		scroll()
		let linkStyle = { margin: "5px", fontSize: "1.5rem", textDecoration: "none", color: "black", fontFamily: "Roboto, Sans-serif" }
		return <div style={ { margin: 0, padding: 0 } }>
           <AppBar onLeftIconButtonTouchTap={ () => this.setState({ open: !this.state.open }) }
                   title="kfitzi"
                   titleStyle={ { color: "white", fontFamily: "Roboto, Sans-serif" } } />
           <Drawer open={ this.state.open }
                   openSecondary={ true }>
             <Column>
               ♡
               <Column alignStart
                       justifyStart>
                 <Link onClick={ () => this.setState({ open: false }) }
                       style={ linkStyle }
                       to="/"> about
                 </Link>
                 <Link onClick={ () => this.setState({ open: false }) }
                       style={ linkStyle }
                       to="/activity"> activity
                 </Link>
                 <Link onClick={ () => this.setState({ open: false }) }
                       style={ linkStyle }
                       to="/projects"> recent projects
                 </Link>
               </Column>
             </Column>
           </Drawer>
           <Column>
             <Column onClick={ () => this.setState({ open: false }) }>
               <LandingPageHeader alignStart
                                  justifyStart>
                 <Column>
                   <RowColumn>
                     <ProfileImage src={ me } />
                     <Column alignStart
                             justifyStart>
                       { /* esfmt-ignore-start */ }
									<H1>kayla</H1>
									<H1>fitzsimmons</H1>
									<H2>frontend developer </H2>
 									{ /* esfmt-ignore-end */ }
                     </Column>
                   </RowColumn>
                 </Column>
               </LandingPageHeader>
               <RowColumn justifyStart>
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
             </Column>
             <Row alignStart
                  justifyStart>
               { this.props.children }
             </Row>
           </Column>
           <Footer/>
         </div>
	}
}
