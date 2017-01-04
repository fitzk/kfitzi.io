import React, { Component } from "react";
import Clipboard from "clipboard";
import { IconButton, FontIcon } from "material-ui";
import { deepOrange500 } from "material-ui/styles/colors";

export default class CopyTriggerWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tooltip: ''
    }
  }

  componentDidMount() {
    this.tooltip();
  }

  tooltip(e) {
    let tooltip = this.props.tooltip;

    if (e && e.type === 'click') {
      tooltip = 'Copied!'
    }
    this.setState({
      tooltip: tooltip
    });
  }

  render() {
    let tooltipStyles = {
      marginLeft: '2.5vw'
    }
    let trigger = new Clipboard('.trigger');
    trigger.on('success', e => e);

    return (
      <div
      onClick={this.tooltip.bind(this)}
      onMouseLeave={this.tooltip.bind(this)}>
                <textarea id="target" style={{
        position: 'absolute',
        left: '-1000px'
      }} value={this.props.text}/>
                <IconButton tooltip={this.state.tooltip}
      tooltipPosition="top-center"
      className="trigger"
      data-clipboard-target="#target">
                    <FontIcon>
                        <i className={this.props.icon}/>
                        {this.props.children}
                    </FontIcon>
                </IconButton>
            </div>
      );
  }
}
