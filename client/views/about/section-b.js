import React from "react"
import { Card, CardText, Paper } from "material-ui"
import Scroll, { Link } from "react-scroll"
import InlineSVG from "react-inlinesvg"
import DialogAlert from "./dialog"
import me from "images/about/me.jpg"
import { Parallax } from "react-parallax"
import './about.scss'


const SectionB = props => {
  return (
    <div>
		 <DialogAlert/>
	</div>
    );
}

export default SectionB
