import React from "react"
import CopyTriggerWrapper from "shared_components/copy-object"
import IconButtonWrapper from "shared_components/icon-button-wrapper"
import InlineSVG from "react-inlinesvg"
import github from "images/about/github"
import codepen from "images/about/codepen"
import email from "images/about/email"
import "./links.scss"

const links = props => {

	return <div className="links-view">
          <ul className="social-links">
            <li className="social-link">
              <CopyTriggerWrapper icon="fa fa-envelope-o fa-lg"
                                  tooltip="click to copy"
                                  text="kayla.fitzsimmons@protonmail.com">
              </CopyTriggerWrapper>
            </li>
            <li className="social-link">
              <a href="https://github.com/fitzk">
                <IconButtonWrapper iconClassName="fa fa-github-alt fa-lg"
                                   tooltip="github"> </IconButtonWrapper>
              </a>
            </li>
            <li className="social-link">
              <a href="https://codepen.io/kfitzi">
                <IconButtonWrapper iconClassName="fa fa-codepen fa-lg"
                                   tooltip="codepen"> </IconButtonWrapper>
              </a>
            </li>
          </ul>
        </div>
}


export default links
