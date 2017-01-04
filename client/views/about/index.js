import React from "react"
import wood from "images/background/texture/wood.jpg"
import sky from "images/background/texture/sky.jpeg"
import Scroll from "react-scroll"
import LazilyLoad from "react-lazyload"
import SectionA from "./section-a"
import SectionB from "./section-b"
import Education from "./education"
import Projects from "./projects"

const About = props => {

  const scrollHeight = 0
  Scroll.animateScroll.scrollTo(scrollHeight)

  return (<div className="flex-container">
	  <SectionA/>
	  <Education/>
	  </div>)
}

export default About
