import React from "react"
import { Card, CardText, Paper } from "material-ui"
import se from "images/about/title.svg"
import name from "images/about/name.svg"
import Scroll, { Link } from "react-scroll"
import InlineSVG from "react-inlinesvg"
import DialogAlert from "./dialog"
import me from "images/about/me.jpg"
import Links from "./links"
import { Parallax, Background } from "react-parallax"
import './about.scss'
import ParallaxComponent from "shared_components/parallax"
import img from "images/background/gold.jpg"
import box from "images/about/box.svg"
import joshua from "images/about/joshua.svg"

const SectionA = props => {
  const scrollHeight = 0
  Scroll.animateScroll.scrollTo(scrollHeight)
  return (
    <Parallax
    bgStyle={{
      //filter: "invert(100%)",
      // filter: "opacity(50%)"
    }}
    bgWidth="110vw"
    bgImage={ img }
    strength={ 100 }>

		  <div className ="section-a">

			  <div className="name-container">

				  <InlineSVG className="white" src={ se }/>

			  </div>
<Links/>
			  <div className="talks">
				  <span>
					  I am a 24 y/o software engineer,
				  </span>
				  <span>
					  designer and artist,
				  </span>
				  <span>
					  living in the SF Bay Area.
				  </span>
			  </div>

			  <div className="box">

				  <InlineSVG className="white" src={joshua}/>

			  </div>

		  </div>

	  </Parallax>
  )
}

export default SectionA
