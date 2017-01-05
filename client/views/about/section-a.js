import React from "react"
import { Card, CardText, Paper } from "material-ui"
import Scroll, { Link } from "react-scroll"

import se from "images/about/title.svg"
import img from "images/background/gold.jpg"
import box from "images/about/box.svg"
import pup from "images/about/menpup.svg"

import joshua from "images/about/joshua.svg"

import InlineSVG from "react-inlinesvg"
import DialogAlert from "./dialog"
import Links from "./links"
import { Parallax, Background } from "react-parallax"

import './about.scss'

const SectionA = props => {

  const scrollHeight = 0
  Scroll.animateScroll.scrollTo(scrollHeight)
  return (
    <Parallax bgWidth="80vw" bgImage={ img } strength={ 100 }>
	 	<div className ="section-a">
			<div className="name-container">
				<InlineSVG className="white" src={ se }/>
		 	</div>
		 	<Links />
		 	<div className="talks normal-font">
				<span>24 y/o technologist, maker,</span>
				<span>designer, and artist,</span>
				<span>living in the SF Bay Area</span>
			</div>
			<div className="box">
				<InlineSVG className="white" src={ joshua }/>
		 	</div>
		 <div className="talks big-font">Education</div>
		</div>
	</Parallax>
    );
}

export default SectionA
