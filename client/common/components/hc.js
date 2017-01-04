import React, { Component } from "react"
import Highlight from "react-highlight"

export default class HighlightComponent extends Component {
  render() {
    return (<div>
		<Highlight className={this.props.className}>
			{this.props.children}
		</Highlight>
    </div>)
  }
}
