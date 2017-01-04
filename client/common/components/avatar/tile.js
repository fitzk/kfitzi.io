import React, {PropTypes} from "react";
import {Avatar} from "material-ui";

const TileAvatar = props => {
    let backgroundColor = props.backgroundColor;
    return (
        <Avatar src={props.src}
                style={{
                    padding: props.padding || '0',
                    backgroundColor: backgroundColor,
                    position: 'relative',
                    top: props.top || '0',
                    right: props.right || '0',
                    width: props.width || '200px',
                    height: props.height || '200px',
                    borderRadius: 2
                }}
        />);
};

export default TileAvatar;
