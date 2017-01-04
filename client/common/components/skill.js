import React from "react"
import { Card, CardText, Paper } from "material-ui"
import Scroll, { Link } from "react-scroll"
import InlineSVG from "react-inlinesvg"


const Skill = props => {
  return (
    <div className="skill">
			<div className="skill-label">
				{ props.name }
			</div>
			<div className="skill-bar">
        <div style={
    {
      width: props.percentage
    }
    }></div>
        </div>
			</div>
  )
}

export default Skill
