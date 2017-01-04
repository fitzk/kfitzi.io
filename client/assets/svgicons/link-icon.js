import React from "react";
import "./index.scss";
import link from "images/link.svg";
import InlineSvg from "react-inlinesvg";

const LinkIcon = (props) => (
    <div className="icon flag">
        <InlineSvg src={link}/>
    </div>
);

export default LinkIcon;
