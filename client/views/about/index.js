import React from "react"
import { Card, CardText, Paper, AppBar } from "material-ui"
import Scroll, { Link } from "react-scroll"
import se from "images/about/title.svg"
import InlineSVG from "react-inlinesvg"
import DialogAlert from "./dialog"
import Links from "./links"
import { TitleContainer, TitleContainerH1, TitleContainerH2, Button, MobileButtonOrange, Section } from "shared_components/styled"
import "./about.scss"
import MediaQuery from "react-responsive"


export const About = props => {

	const scrollHeight = 0
	Scroll.animateScroll.scrollTo(scrollHeight)
	const nav = () => {
		window.open("https://fitzk.github.io/resume", "_blank", "toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes");
	}
	return <Section>
          <TitleContainerH1>
            kayla fitzsimmons
          </TitleContainerH1>
          <TitleContainerH2 w="90vw">
            frontend developer
          </TitleContainerH2>
          <MediaQuery query="(max-device-width: 1224px)">
            <Section>
              <MobileButtonOrange onClick={ nav }>
                resume
              </MobileButtonOrange>
              <MobileButtonOrange>
                github
              </MobileButtonOrange>
              <MobileButtonOrange>
                linkedin
              </MobileButtonOrange>
              <MobileButtonOrange>
                stackoverflow
              </MobileButtonOrange>
            </Section>
          </MediaQuery>
          <MediaQuery query="(min-device-width: 1224px)">
            <Button onClick={ nav }>
              resume
            </Button>
          </MediaQuery>
        </Section>
}
