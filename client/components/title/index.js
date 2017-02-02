import React from "react"
import styled, { css } from "styled-components";

/* esfmt-ignore-start */
const title = styled.div`
  overflow: hidden;
	display: flex;
  height: ${props => props.h || "auto"};
`
export const H1 = styled(title)`
  color: ${props => props.theme.palette.accent3Color};
  font-size: 3em;
  margin=left: ${props => props.marginLeft};
  font-weight: bold;
  padding:  ${props => props.padding};;
`
export const H2 = styled(title)`
	font-size: 2em;
`/*esfmt-ignore-end*/
