import React from "react"
import styled from "styled-components"
import MediaQuery from "react-responsive"
import { StyledImage, StyledImageContainer, StyledImageMobile, StyledImageContainerMobile } from "./../styled-components/image"
import { nav } from "./../utils"

export const Image = props => {
	let n = () => nav(props.to)
	let submit = props.submit && props.onSubmit;
	let navToTab = props.nav && n

	return <div>
          <MediaQuery query="(min-device-width: 1224px)">
            <StyledImageContainer>
              <StyledImage src={ props.src } />
            </StyledImageContainer>
          </MediaQuery>
          <MediaQuery query="(max-device-width: 1224px)">
            <StyledImageContainerMobile>
              <StyledImageMobile src={ props.src } />
            </StyledImageContainerMobile>
          </MediaQuery>
        </div>
}
