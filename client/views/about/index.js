import React from "react"
import Scroll from "react-scroll"
import SectionA from "./section-a"
import SectionB from "./section-b"
import Education from "./education"
import Projects from "./projects"

const About = props => {

  const scrollHeight = 0
  Scroll.animateScroll.scrollTo(scrollHeight)

  return (
    <div className="flex-container">
	  <SectionA/>
	  <Education/>
	  <SectionB/>
	 </div>
  )
}

export default About
