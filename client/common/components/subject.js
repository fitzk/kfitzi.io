import React, { Component } from "react"
import TileCard from "shared_components/tile-card"
import { browserHistory } from "react-router"
import Scroll from "react-scroll"

export default class Subject extends Component {

  constructor(props) {
    super(props)
    this.toggleCard = this.toggleCard.bind(this)
  }

  toggleCard() {
    let open = false
    if (this.props.query.open && this.props.query.open.includes(this.props.query_name)) {
      open = true
    }
    open ? browserHistory.push("/notebook?subjects=all") :
      browserHistory.push(`/notebook?subjects=all&open=${ this.props.query_name }`)
  }

  render() {
    const scrollHeight = 0
    let open = false
    if (this.props.query.open && this.props.query.open.includes(this.props.query_name)) {
      open = true
      Scroll.animateScroll.scrollTo(scrollHeight, {
        duration: 300,
        delay: 2,
        smooth: true
      })
    }

    let _props = {
      expanded: open,
      title: this.props.title,
      initiallyExpanded: false,
      avatar: this.props.avatar,
      onExpandChange: this.toggleCard,
      className: "card",
      headerClassName: "header",
      children: (
      <div className="grid">
									{ this.props.children }
                </div>
      ),
      name: this.props.query_name
    }
    return (<TileCard {..._props} />)
  }
}
