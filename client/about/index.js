import React from "react"
import { Card, CardText, Paper, AppBar } from "material-ui"
import Scroll, { Link } from "react-scroll"
import se from "images/about/title.svg"
import InlineSVG from "react-inlinesvg"
import DialogAlert from "./dialog"
import Links from "./links"
import "./about.scss"
import MediaQuery from "react-responsive"
import { LandingPage } from "./../landing-page"
import { StyledSection } from "./../styled-components/containers"

export const About = props => {

	const scrollHeight = 0
	Scroll.animateScroll.scrollTo(scrollHeight)
	return <StyledSection>
          <div/>
        </StyledSection>
}
