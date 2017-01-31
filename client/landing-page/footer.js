import React from "react"
import { Card, CardText, Paper } from "material-ui"
import Scroll, { Link } from "react-scroll"
import InlineSVG from "react-inlinesvg"
import logo from "images/logo/white_logo_dark_background.jpg"
import styled from "styled-components"

const Section = styled.div`
	top: 100vh;
	position: relative;
	z-index: 20;
	background-color: black;
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`
export const Footer = props => {
	return (
		<Section>
    <div>
      <div>
        <img style={ { height: "100px", width: "100px", marginBottom: "20px" } }
             src={ logo } />
      </div>
      <div>
        <div>
          © 2016-present Kayla Fitzsimmons
        </div>
      </div>
      <div>
      </div>
    </div>
  </Section>
		);
}


/* <a href="http://stackoverflow.com/users/6846678/kfitzi"><img src="http://stackoverflow.com/users/flair/6846678.png?theme=Clean"
                                                             width="200"
                                                             height="auto"
                                                             alt="profile for kfitzi at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
                                                             title="profile for kfitzi at Stack Overflow, Q&amp;A for professional and enthusiast programmers" /></a>
<a href="https://github.com/fitzk/kfitzi.io">
  <IconButtonWrapper style={ { color: "white" } }
                     iconClassName="fa fa-github-alt fa-lg"
                     tooltip="code for this site"> </IconButtonWrapper>
</a>
<a href="https://twitter.com/kfitzikfitzi">
  <IconButtonWrapper style={ { color: "white" } }
                     iconClassName="fa fa-twitter fa-lg"
                     tooltip="tweet @ me"> </IconButtonWrapper>
</a> */
