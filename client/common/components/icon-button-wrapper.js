import React from "react"
import { deepOrange500 } from "material-ui/styles/colors"
import { IconButton, FontIcon } from "material-ui"


const IconButtonWrapper = props => {
  const tooltipStyles = {
    marginLeft: '3vw'
  };
  return (
    <IconButton tooltip={props.tooltip} tooltipPosition="top-center">
            <FontIcon>
                <i style={props.style} className={props.iconClassName}/>
                {props.children}
            </FontIcon>
        </IconButton>
  )
};

export default IconButtonWrapper
