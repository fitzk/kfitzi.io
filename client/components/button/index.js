import React from "react"
import MediaQuery from "react-responsive"
import { nav } from "utils"
import styled, { css } from "styled-components";

/*esfmt-ignore-start*/
const button = css`
  margin: 5px;
  border-radius: 5px;
  border-style: solid;
	padding: 5px;
`
const orange = css`
  &:hover {
    background-color: ${props => props.theme.palette.accent2Color};
  }
  background-color: transparent;
  color: ${props => props.theme.palette.accent3Color};
  border-color: ${props => props.theme.palette.accent3Color};
`
export const StandardButton = styled.button`
  ${ button }
  width: "auto";
  height: "auto";
  font-size: 1.25rem;
  z-index: ${props => props.zindex || "10"};
  border-width: 2px;
	flex-grow: 6;
`
export const MobileButton = styled.button`
 ${button}
	height: 10vh;
	width: 75vw;
	font-size: 2rem;
	align-self: center;
  border-width: 3px;
`
export const MobileButtonOrange = styled(MobileButton)`
${ orange }
`
export const ButtonOrange = styled(StandardButton)`
${ orange }
`
 /*esfmt-ignore-end*/

export const Button = props => {
	let n = () => nav(props.to)
	let submit = props.submit && props.onSubmit;
	let navToTab = props.nav && n

	return <div>
          <MediaQuery query="(min-device-width: 1224px)">
            <ButtonOrange onClick={ navToTab }
                          submit={ submit }>
              { props.children }
            </ButtonOrange>
          </MediaQuery>
          <MediaQuery query="(max-device-width: 1224px)">
            <MobileButtonOrange onClick={ navToTab }
                                submit={ submit }>
              { props.children }
            </MobileButtonOrange>
          </MediaQuery>
        </div>
}
