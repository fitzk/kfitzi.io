import styled, { css } from "styled-components";

/*esfmt-ignore-start*/
const button = css`
  margin: 5px;
  border-radius: 5px;
  border-style: solid;
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
  font-size: 1.5rem;
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
