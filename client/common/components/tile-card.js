import React, { PropTypes, Component } from "react"
import { Card, CardHeader, CardText } from "material-ui"
import TileAvatar from "shared_components/avatar/tile"
import SquareSmallAvatar from "shared_components/avatar/square-small"

const TileCard = ({expanded, title, initiallyExpanded, avatar, onExpandChange, className, headerClassName, children, name, avatarStyle}) => {

  let titleStyleVisible = {
    visibility: 'visible',
  //  fontSize: '1.3rem'
  }
  let titleStyleHidden = {
    visibility: 'collapse',
  }
  let largeTileAvatar = <TileAvatar style={ avatarStyle ? avatarStyle : {} } id={ name } src={ avatar }
  backgroundColor="white"/>
  let smallSquareAvatar = <SquareSmallAvatar src={ avatar } backgroundColor="white"/>

  let a = expanded ? smallSquareAvatar : largeTileAvatar
  let titleStyle = expanded ? titleStyleVisible : titleStyleHidden
  return (
    <Card expanded={expanded}
    style={{
      order: expanded ? 1 : -5
    }}
    className={expanded ? className : 'tile animated fadeIn'}
    zDepth={0}
    onExpandChange={onExpandChange}
    initiallyExpanded={initiallyExpanded}>
            <CardHeader
    className={expanded ? headerClassName : "tile-header"}
    titleStyle={titleStyle}
    title={title}
    avatar={a}
    actAsExpander={true}
    showExpandableButton={ expanded ? true : false }/>
            <CardText
    expandable={true}>
                <div id={`child-${name}`}>
                    {children}
                </div>
            </CardText>
        </Card>
  )
}
export default TileCard

TileCard.propTypes = {
  expanded: PropTypes.bool,
  title: PropTypes.string,
  initiallyExpanded: PropTypes.bool,
  avatar: PropTypes.node,
  onExpandChange: PropTypes.func,
  className: PropTypes.string
}
