import React, {PropTypes} from "react";
import {Avatar} from "material-ui";

const AvatarCircleSmall = props => {
    return <Avatar src={props.src} style={{borderRadius: '50%', marginRight: '10px'}}/>;
};

export default AvatarCircleSmall;
