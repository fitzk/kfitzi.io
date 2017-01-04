import React, {PropTypes} from "react";
import {Avatar} from "material-ui";

const SquareSmallAvatar = props => {
    let backgroundColor = props.backgroundColor;
    return <Avatar src={props.src} style={{
        borderRadius: '0', border: '1px solid black', marginRight: '10px', backgroundColor: backgroundColor
    }}/>;
};

export default SquareSmallAvatar;
