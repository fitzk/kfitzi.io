import React from "react";
import "./index.scss";
import flag from "images/flag.svg";
import InlineSvg from "react-inlinesvg";

const FlagIcon = (props) => (
    <div className="icon flag">
        <InlineSvg src={flag}/>
    </div>
);

export default FlagIcon;
