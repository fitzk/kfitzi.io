import React from "react"
import logo from "./../assets/images/logo/logo_transparent_background.png"
import styled from "styled-components"
import { RowColumn, Column } from "components"

/* esfmt-ignore-start */
const RowFooter = styled(RowColumn)`
	background-color: ${props => props.theme.palette.primary1Color};
	font-family: Roboto, Sans-serif;
	box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px;
	color: white;
	padding-top: 2em;
	margin: 0;
	width: 100%;
	padding: .5em;
`/* esfmt-ignore-end */

export const Footer = props => {
	return <RowFooter alignCenter
                   justifySpaceBetween>
          <Column>
            <img style={ { height: "100px", width: "100px" } }
                 src={ logo } />
          </Column>
          <Column style={ { height: "100px", margin: "16px" } }
                  alignEnd
                  justifyEnd>
            © 2016-present Kayla Fitzsimmons
          </Column>
        </RowFooter>

}
