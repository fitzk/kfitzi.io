import React from "react"
import { Card, CardText, Paper } from "material-ui"
import Scroll, { Link } from "react-scroll"
import InlineSVG from "react-inlinesvg"
import DialogAlert from "./dialog"
import IconButtonWrapper from "shared_components/icon-button-wrapper"
import logo from "images/logo/white_logo_dark_background.jpg"
import me from "images/about/me.jpg"
import { Parallax } from "react-parallax"
import './about.scss'


const SectionB = props => {
  return (
    <div className="footer">
		 <div className="right">
			 <img style={{
      height: "100px",
      width: "100px",
      marginBottom: "20px"
    }} src={logo}/>
		 </div>
		 <div className="center">
			 <div> © 2016-present Kayla Fitzsimmons </div>
		 </div>
	 <div className="left">
		 <a href="https://github.com/fitzk/kfitzi.io">
			  <IconButtonWrapper style={{
      color: "white"
    }} iconClassName="fa fa-github-alt fa-lg"
    tooltip="code for this site">
			  </IconButtonWrapper>
		 </a>
		 <a href="https://twitter.com/kfitzikfitzi">
			  <IconButtonWrapper style={{
      color: "white"
    }} iconClassName="fa fa-twitter fa-lg"
    tooltip="tweet @ me">
			  </IconButtonWrapper>
		 </a>
	 </div>
	</div>
    );
}

export default SectionB
