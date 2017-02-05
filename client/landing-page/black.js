import React, { Component } from "react"
import { AppBar } from "material-ui"
import { Link } from "react-router"
import MediaQuery from "react-responsive"
import styled from "styled-components"
import { scroll } from "utils"
import { Row, Column, RowColumn, H1, H2, LinkButton, ProfileImage, A } from "components"
import { MaterialDrawer } from "./drawer"
import me from "./../assets/images/me.jpg"
import { Footer } from "./footer"
import { Projects } from "./../projects"
import { Links } from "./links"
import { Background } from "./index"
/* esfmt-ignore-start */
const Container = styled.div`
	width: 100%;
	height: 100%;
`
const Children = styled.div`
`
const BackgroundBlack = styled(Column)`
	width:${props => props.width};
	height:${props => props.height};
	background-color: black;
	color: white;
	padding-bottom: 5vh;
	overflow-y: ${props => props.overflow};
`/* esfmt-ignore-end */

const BlackSide = props => {
	return <div>
          <MediaQuery query="(min-device-width: 1224px)">
            <BackgroundBlack alignCenter
                             justifyCenter
                             width="65vw"
                             height="100%"
                             overflow="scroll"
                             flexShrink="0">
              <Children>
                { props.children }
              </Children>
            </BackgroundBlack>
          </MediaQuery>
          <MediaQuery query="(max-device-width: 1224px)">
            <BackgroundBlack alignStart
                             justifyStart
                             width="100vw"
                             overflow="visible"
                             flexShrink="0">
              <Children>
                { props.children }
              </Children>
            </BackgroundBlack>
          </MediaQuery>
        </div>
}
export { BlackSide }
