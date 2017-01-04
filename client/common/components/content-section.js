import React, { PropTypes } from "react"
import { CardText, Card } from "material-ui"
import Header from "shared_components/header"

const ContentSection = props => {
  const style = {
    width: "100vw",
    height: "100vh"
  }
  return (
    <div>
            <Header title={props.title}/>
            <Card zDepth={0}>
                <CardText>
                    { props.children }
                </CardText>
            </Card>
        </div>
  )
}

export default ContentSection

ContentSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
}
