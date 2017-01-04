import React, { Component } from "react"
import "materialize-css/dist/css/materialize.css"

export default class ParallaxComponent extends Component {
  componentDidMount() {
    //  const parallaxNode = document.getElementsByClassName('parallax')
    //  console.log(parallaxNode)
  }
  render() {

    return (
      <div className="parallax-container">
		<div className="parallax">
			{this.props.children}
		</div>
    </div>
    )
  }
}
