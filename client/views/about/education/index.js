import React from "react"
import Scroll from "react-scroll"
import { Card, CardHeader } from "material-ui"
import { Parallax } from "react-parallax"
import OregonState from "./oregon-state"
import UCSB from "./ucsb"
import Header from "shared_components/header"
import img from "images/background/gold.jpg"

const Education = props => {
  const scrollHeight = 0
  Scroll.animateScroll.scrollTo(scrollHeight)
  return (
    <div className="flex-container">
			<OregonState/>
			<UCSB/>
		</div>
  )
}

export default Education
