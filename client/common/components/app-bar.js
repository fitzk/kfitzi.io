import React, { Component } from "react";
import { AppBar, FontIcon } from "material-ui";
// import "styles/index.scss";


export default class NavComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    let barStyle = {
        zIndex: 6000,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        flexBasis: '12%',
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        color: 'white'
      },
      iconStyle = {
        color: 'white'
      },
      iconStyleRight = {
        marginTop: 0,
        marginRight: '5px'
    }
    return (<AppBar zDepth={0} showMenuIconButton={ false }
      iconElementRight={
      <FontIcon style={iconStyleRight}> <i className="fa fa-bars fa-lg"/> </FontIcon>
      }  onRightIconButtonTouchTap={ this.props.click }>
    </AppBar>);
  }
}
